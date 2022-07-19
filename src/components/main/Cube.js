import './Cube.css'
import React from 'react'
import { initialize, animate, terminate } from './renderer';

import TicTacToe from '../TicTacToe/main';

export default function Cube(){
    const tictactoeRef = React.useRef();
    React.useEffect(()=>{
        let container = document.querySelector('#viewer');
        let components = {
            tictactoe: tictactoeRef.current
        };
        initialize(container, components);
        animate();
        return ()=>{
            terminate();
        }
    }, [])
    return (
        <>
            <div id="viewer">
                <TicTacToe ref={tictactoeRef}/>
            </div>
        </>
    )
}
