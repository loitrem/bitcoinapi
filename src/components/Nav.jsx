import { Link } from "react-router-dom";
import React from "react";

export default function Nav (props){
    return (
        <div className="nav">
            <Link to="/price">
                <div>CRYPTO PRICES</div>
            </Link>
            <Link to="/currencies">
                <div>CURRENCIES</div>
            </Link>
        </div>
    );
};