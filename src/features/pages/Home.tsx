import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Home : React.FC<{ name:string }> = ({name}) =>{
    return (<div>Home222 {name}</div>);
}