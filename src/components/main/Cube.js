import './Cube.css'
import React from 'react'
import { initialize, animate, terminate } from './renderer';

const getContainer = ()=>document.querySelector('#viewer');
export default function Cube(){
    React.useEffect(()=>{
        initialize(getContainer());
        animate();
        return ()=>{
            terminate();
        }
    }, [])
    return (
        <>
            <div id="viewer"></div>
        </>
    )
}
