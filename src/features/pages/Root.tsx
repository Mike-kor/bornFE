import React from "react";
import {Counter} from "../counter/Counter";

export const Root : React.FC<{ name:string }> = ({name}) =>{
    return (<div><Counter></Counter></div>);
}