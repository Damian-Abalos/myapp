import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return(
        <div 
            style={{fontSize:"50px"}}
            className="align-items-center"
        >
            <FontAwesomeIcon className="ms-2"
                icon={faShoppingCart}
                size="sm"/>
        </div>
        
    )
}

export default CartWidget
