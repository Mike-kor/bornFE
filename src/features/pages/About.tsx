import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const About : React.FC<{ name:string }> = ({name}) =>{
    return (<div>About22 {name}</div>);
}