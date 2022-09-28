import React, {useState} from "react";

function Info() {
    const [isShowing, setShowing] = useState(false);
    function showInfo() {
        setShowing(true);
        console.log('show')
    }

    function closeInfo() {
        setShowing(false);
        console.log('close')
    }

    return (
        <>
            <div className='info' onClick={showInfo}>
                <p className='info_text'>info</p>
            </div>

            <div className={`info_content ${isShowing ? 'info_content2' : null}`}>
                <p className="info_content_text">
                    Hello my friend:)<br/>Main aim of this game is to reach <span>one million of score</span>! So here are some tips for you about gameplay. <br/> <span>You have</span> four buttons to increase your chances to win the game<br/><span>First two</span> i think you already realized what they are for :) - to grow amount of score recieved by clicking and waiting.<br/>The last two... i'll leave it for you to discover:)
                </p>
                <button className="close_info_content" onClick={closeInfo}>Close</button>
            </div>
        </>
    )
}

export default Info;