import * as React from 'react';

import './task-input.css';

export const TaskInput = (props: any) => {
    const { index, groupId, dependencyIds, addTask } = props;

    return(
        <div className="task-input-wrapper">
            <div className="task-input-inner-wrapper">
                <input
                    id={`taskInput${index}`}
                    className="task-input-input"
                    type="text"
                    placeholder="Type something you need to do..."
                    onKeyDown={(ev) => {
                        if(ev.keyCode == 13){
                            addTask({ dependencyIds: dependencyIds, groupId: groupId, label: ev.target['value'] });
                            ev.target['value'] = '';
                         }
                    }}
                />
                <button
                    className ="task-input-button"
                    onClick={(event) => {
                        const value = document.querySelector(`#taskInput${index}`)['value'];
                        addTask({ dependencyIds: dependencyIds, groupId: groupId, label: value });
                        document.querySelector(`#taskInput${index}`)['value'] = '';
                    }}
                >
                    <img className="task-input-img" src={'../assets/send.svg'} />
                </button>
            </div>
        </div>
    )
};
