import './htmlContent.css'
import React from "react";


// [front,right,left,back,top,bottom]
const htmlContent = [
    <>
        <div style={{width:'300px'}}>
            There will eventually come a day when I won't have to fill all these faces with filler text. 
            But today is not that day
        </div>
    </>,
    <>
        <div style={{width:'300px'}}>
            <div style={{textAlign:'left'}}>So how did you make this?</div>
            <div style={{textAlign:'right'}}>Does that mean you like it?</div>
            <div style={{textAlign:'left'}}>why*</div>
            <div style={{textAlign:'left'}}>... get a life</div>
        </div>
    </>,
    <>
        <iframe src='https://homepages.iitb.ac.in/~200050035/' width="570px" height="570px" title='Tic-Tac-Toe' />
    </>,
    <>
        Website made using ReactJs. <br/>
        (The Tic-Tac-Toe game is a <a href='https://homepages.iitb.ac.in/~200050035/'>separate project</a> embedded in an iframe) <br/>
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
        <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' width="50px" height="50px" title='Rick-roll' />
    </>
];

export default htmlContent