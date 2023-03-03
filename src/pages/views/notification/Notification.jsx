import React from "react";
import MessageIcon from '@material-ui/icons/Message';

const Notification = () => {
    return <div style={{
        position: "absolute", paddingLeft: "12vmax",
        transform: "translate(-50%,-50%)", top: "40vh", left: "50vh"
    }} className="title">

        <h2>Notification</h2>

        <div style={{ position: "absolute", left: "15vmax", height: "100vh", width: "65vmax" }}>
            <p>
                <br />
                <MessageIcon /> CRM System With Marketing Capabilities
                To increase the performance of your business and boost your revenue, you might want to install a       CRM for sales. It will help you to work both with your already existing clients and prospects. A   CRM for sales managers will come in handy for organizations of any size and sphere of activity.
                GET STARTED
                <br /><br /><br />
                <MessageIcon />Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta      recusandae, neque sequi laboriosam voluptatem perspiciatis eveniet, repellendus a quaerat quia     expedita! Assumenda nostrum praesentium asperiores, saepe voluptatum doloremque dolore quasi,    eius aut modi odio dolor necessitatibus officiis, provident expedita aliquam deleniti dolorem     animi repellat laudantium. Expedita maiores sed deleniti beatae in enim ratione autem velit quo      vero quam doloribus modi vitae accusamus voluptas voluptatibus alias dignissimos, ab provident        iste? Sunt mollitia ad dolor itaque!
                <br /><br /><MessageIcon />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam    minima molestias odit, eius qui nam ab incidunt consequuntur facere laborum! Totam architecto   quod consequatur ullam illum, distinctio iusto commodi voluptas maxime eligendi, incidunt odio   dolores soluta vitae culpa voluptatem nesciunt odit voluptate ex reiciendis cupiditate! Sed     animi cupiditate odit nobis.
            </p>
        </div>

    </div>;
};

export default Notification;