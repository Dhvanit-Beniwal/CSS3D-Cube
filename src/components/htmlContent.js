import './htmlContent.css'
import React from "react";

const tictactoeURL = '/~200050035/#/TicTacToe';

// [front,right,left,back,top,bottom]
const htmlContent = [
    <>
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
        <iframe src={tictactoeURL} width="580px" height="580px" title='Tic-Tac-Toe' />
    </>,
    <>
        Website made using ReactJs. <br/>
        (The Tic-Tac-Toe game is a <a href={tictactoeURL}>separate project</a> embedded in an iframe) <br/>
        3D-rendering done with the help of <a href='https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer'>three.js</a> .<br/>
        It makes use of the 'transform' style attribute of html elements, and therefore no canvas or WebGL context is used.<br /><br />
        <a href='https://github.com/Dhvanit-Beniwal/CSS3D-Cube'>Source Code</a><br/><br/>
        ( I know these links are not clickable, haven't figured it out yet )
    </>,
    <>
        <div style={{width:'400px', textAlign:'justify'}}>
            I don't know why you wouldn't already realise this by now,
            but yes you can interact with this cube. <br/>Orbit, Translate and zoom using:<br/>
            Left click, right click and scroll (on a mouse)<br/>
            (On touch, use one and two fingers)
        </div>
    </>,
    <>
        {/* <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' width="50px" height="50px" title='Rick-roll' /> */}
        <div className='spiral'></div>
    </>
];

export default htmlContent