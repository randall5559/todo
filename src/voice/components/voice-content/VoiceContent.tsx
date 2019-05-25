import * as React from 'react';

import './voice-content.css';


export const VoiceContent = () => (
    <div className="voice-content">
        <div className="voice-saying-box">
            <div className="voice-saying-header">
                <img src={'../assets/speech-bubble-with-text-lines.svg'} />
                <span>Sayings</span>
            </div>
            <div className="voice-saying-list">
                <div className="voice-saying"><strong>You Say:</strong> Collapse All</div>
                <div className="voice-saying"><strong>You Say:</strong> Expand All</div>
                <div className="voice-saying"><strong>You Say:</strong> Add Group [NAME_OF_GROUP]</div>
                <div className="voice-saying"><strong>You Say:</strong> Remove Group [NUMBER_OF_GROUP]</div>
                <div className="voice-saying"><strong>You Say:</strong> Add Task [NAME_OF_TASK] to group [NUMBER_OF_GROUP]</div>
            </div>
        </div>
    </div>
);
