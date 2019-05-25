import * as React from 'react';

import './task-group-input.css';

export const TaskGroupInput = (props) => (
    <div className="group-input-wrapper">
        <label className="group-label" htmlFor="task-group">Task Group:</label>
        <input
            id="task-group"
            className="group-input"
            type="text"
            placeholder="enter a task group name"
            onKeyDown={(ev) => {
                const value = ev.target['value']
                if(ev.keyCode == 13 && value !== ''){
                    props.addGroup(value);
                    props.scrollToBottom();
                    ev.target['value'] = '';
                }
            }}
        />
        <button
            className="group-button"
            onClick={() => {
                const value = document.querySelector('#task-group')['value'];
                if (value !== '') {
                    props.addGroup(value);
                    props.scrollToBottom();
                    document.querySelector('#task-group')['value'] = '';
                }
            }}
        >
            <img src={'../assets/add-button-inside-black-circle.svg'} />
        </button>
    </div>
);
