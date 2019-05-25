import * as React from 'react';

import './voice-header.css';

export const VoiceHeader = (props) => (
    <div className="voice-header-wrapper">
        <h2 className="voice-h1">Do it with your voice
        {/* <span className="voice-click-label">(Click to activate voice recognition)</span> */}
        </h2>
        <button onClick={props.voiceOnOff} className="voice-button">
            <img src={'../assets/microphone.svg'} />
        </button>
    </div>
);
