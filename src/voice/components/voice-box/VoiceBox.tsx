import * as React from 'react';

import './voice-box.css';


export const VoiceBox = (props: React.Props<any>) => (
    <div className="voice-box">{ props.children }</div>
);
