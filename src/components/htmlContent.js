import './htmlContent.css'
import './animations/rolling_circle.css'
import './animations/spiral_squares.css'
import React from "react";

const tictactoeURL = '/~200050035/#/TicTacToe';

// [front,right,left,back,top,bottom]
const htmlContent = [
    <>
        <div className='background' style={{position:'absolute', zIndex:'-1'}}></div>
        <div className='quote'>
            There will eventually come a day when I won't have to fill all these faces with filler text. 
            But today is not that day
        </div>
    </>,
    <>
        <div className='text-container'>
            <div className='left text'>So how did you make this?</div>
            <div className='right text'>Does that mean you like it?</div>
            <div className='left text'>Why*</div>
            <div className='left text'>... get a life</div>
        </div>
    </>,
    <>
        <div className='container'>
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
            <div className='square' />
        </div>
    </>,
    <>
        <div className='background' style={{position:'absolute', zIndex:'-1'}}></div>
        Written in ReactJs, 3D rendering with <a href='https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer'>three.js</a>. Animations use CSS keyframes.<br/>
        three.js here makes use of the 'transform' style attribute of html elements.<br />
        The <a href={tictactoeURL}>Tic-Tac-Toe</a> game is client side JavaScript for player vs computer <br/>
        <br /><a href='https://github.com/Dhvanit-Beniwal/CSS3D-Cube'>Source Code</a><br/><br/>
        Orbit, Translate and zoom (Interact with the cube) using:<br/>
            Left click, right click and scroll (on a mouse)<br/>
            (On touch, use one and two fingers)<br/>
        ( Hyperlinks are not mouse-clickable, haven't figured it out yet )
    </>,
    <>
        <iframe src={tictactoeURL} width="580px" height="580px" title='Tic-Tac-Toe' />
    </>,
    <>
        {/* <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' width="50px" height="50px" title='Rick-roll' /> */}
        <div className='big-circle' >
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
            <div className='path'><div className='dot'/></div>
        </div>
    </>
];

export default htmlContent