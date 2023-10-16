import React from "react";

function WelcomePage (props) {
    return(
        <div>
            <h1>{`Esta es la página de bienvenida para ${props.text}`}</h1>
            <h2>{props.mensaje}</h2>
        </div>
        
    );
}

export default WelcomePage;