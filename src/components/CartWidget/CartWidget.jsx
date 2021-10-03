import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidget = (Icon) => {
    return(
        <span style={{fontSize:"50px"}}>
            <FontAwesomeIcon 
                icon={faCartPlus}
                color="black"
                size="sm"/>
        </span>
        
    )
}

export default CartWidget
