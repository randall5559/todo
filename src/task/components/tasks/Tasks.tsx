import * as React from 'react';

import './tasks.css';

export const Tasks = (props: React.Props<any>) => (
    <div className="tasks-wrapper">{ props.children }</div>
);
