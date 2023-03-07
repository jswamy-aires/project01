import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from '@ag-grid-community/react';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import React, { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef, useState, useCallback } from 'react';
import { ModuleRegistry, GridOptions } from '@ag-grid-community/core';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule, RangeSelectionModule, RowGroupingModule, RichSelectModule]);

const MyReactEditor = memo(forwardRef((props, ref) => {

    const [value, setValue] = useState(parseInt(props.value));
    const refInput = useRef(null);

    // Cell Editor interface, that the grid calls
    useImperativeHandle(ref, () => {
        return {
            // the final value to send to the grid, on completion of editing
            getValue() {
                // this simple editor doubles any value entered into the input
                return value;
            }
        };
    });

    const onChangeListener = useCallback(event => setValue(event.target.value), []);
    useEffect(() => refInput.current.focus(), []);

    return (
        <input type="number" className="my-editor"
            ref={refInput}
            value={value}
            onChange={onChangeListener}
        />
    );
}));

var checkboxSelection = function (params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
};

var headerCheckboxSelection = function (params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
};

const DashboardGrid = () => {

    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '500px', width: '100%' }), []);

    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: 'Athlete',
            field: 'athlete',
            minWidth: 170
        },
        { field: 'age' },
        { field: 'country' },
        {
            field: 'year',
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'date',
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'sport',
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'gold',
            editable: true,
            cellEditor: MyReactEditor,
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'silver',
            editable: true,
            cellEditor: MyReactEditor,
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'bronze',
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'total',
            filter: 'agNumberColumnFilter'
        },
    ]);


    /*
        // never changes, so we can use useMemo
        const columnDefs = useMemo(() => [
            {
                field: 'country'
            },
            {
                field: 'athlete',
            },
            {
                field: 'gold',
                editable: true,
                cellEditor: MyReactEditor
            },
            {
                field: 'silver',
                cellEditor: MyReactEditor,
                cellEditorPopup: true
            }
        ], []);
    
      */
    const autoGroupColumnDef = useMemo(() => {
        return {
            headerName: 'Group',
            minWidth: 170,
            field: 'athlete',
            valueGetter: (params) => {
                if (params.node.group) {
                    return params.node.key;
                } else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: 'agGroupCellRenderer',
            cellRendererParams: {
                checkbox: true,
            },
        };
    }, []);
    // never changes, so we can use useMemo
    const defaultColDef = useMemo(() => {
        return {
            editable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 100,
        };
    }, []);

    const paginationNumberFormatter = useCallback((params) => {
        return '[' + params.value.toLocaleString() + ']';
    }, []);

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.paginationGoToPage(0);
    }, []);

    const onPageSizeChanged = useCallback(() => {
        var value = document.getElementById('page-size').value;
        gridRef.current.api.paginationSetPageSize(Number(value));
    }, []);

    // changes, needs to be state
    const [rowData, setRowData] = useState();

    const onGridReady = useCallback((params) => {
        fetch('olympic-winners.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(resp => resp.json())
            .then(data => setRowData(data));
    }, []);

    // gets called once, no dependencies, loads the grid data
    /*
    useEffect(() => {
        fetch('olympic-winners.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(resp => resp.json())
            .then(data => setRowData(data));
    }, []);
    */

    return (
        <div style={containerStyle}>
            <div className="example-wrapper">
                <div className="ex-header">
                    Page Size:
                    <select onChange={onPageSizeChanged} id="page-size">
                        <option value="10" selected={true}>
                            10
                        </option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>

                <div style={gridStyle} className="ag-theme-alpine">

                    <AgGridReact

                        animateRows="true"
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        rowData={rowData}
                        ref={gridRef}
                        autoGroupColumnDef={autoGroupColumnDef}
                        suppressRowClickSelection={true}
                        groupSelectsChildren={true}
                        rowSelection={'multiple'}
                        rowGroupPanelShow={'always'}
                        pivotPanelShow={'always'}
                        pagination={true}
                        paginationPageSize={10}
                        paginationNumberFormatter={paginationNumberFormatter}
                        onGridReady={onGridReady}
                        onFirstDataRendered={onFirstDataRendered}
                    >

                    </AgGridReact>
                </div>
            </div>
        </div>
    );
}
export default DashboardGrid