import React from "react";
import "./Loading.css";
import "../App.js";

function Loading({msg}){
    return (
        <div className="loadingBox">
            <span className="font_title">{msg}</span>
        </div>
    );
}

export default Loading;