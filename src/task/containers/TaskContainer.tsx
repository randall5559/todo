import * as React from 'react';

import { TaskModel } from '../models/task.model';
import {
  Task,
  Tasks,
  TaskBox,
  TaskInput,
  TaskGroup,
  TaskGroupInput,
  TaskExpandCollapse
} from '../components';
import './task-container.css';
import { TaskGroupModel, Task as ITask } from '../models';


/**
 * Wrapper for all task components
 *
 * @export
 * @class TaskContainer
 * @extends {React.Component<TaskModel.Props, TaskModel.State>}
 */
export class TaskContainer extends React.Component<TaskModel.Props, TaskModel.State> {
  constructor(props?: TaskModel.Props, context?: any) {
    super(props, context);
  }

  /**
   * scroll browser to bottom to bring newly create group into view
   *
   * @private
   * @memberof TaskContainer
   */
  private scrollToBottom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }

  render() {
    const {
      tasks,
      taskGroups,
      toggleGroup,
      removeGroup,
      statusChange,
      removeTask,
      addTask,
      addGroup,
      increTaskCount,
      decreTaskCount,
      addRemoveDependency,
      tasksExpand,
      tasksCollapse,
    } = this.props;

    return (
      <div className="task-container-wrapper">
        <TaskBox>
          <TaskGroupInput
            addGroup={addGroup}
            scrollToBottom={this.scrollToBottom}
          />
        </TaskBox>
        <TaskExpandCollapse tasksExpand={tasksExpand} tasksCollapse={tasksCollapse}  />
        <Tasks>
          {
            taskGroups.map((group: TaskGroupModel, index: number) => {
              if (!group.isDeleted) {
                {
                  return(
                    <TaskBox key={index} isFirstItem={ index === 0 ? true : false }>
                      <TaskGroup
                        group={group}
                        toggleGroup={toggleGroup}
                        removeGroup={removeGroup}
                      >
                        {
                          tasks.map((task: ITask, _index: number) => {
                            if (task.groupId === group.groupId && !task.isDeleted) {
                              return(
                                <Task
                                  key={_index}
                                  task={task}
                                  groupId={group.groupId}
                                  statusChange={statusChange}
                                  removeTask={removeTask}
                                  increTaskCount={increTaskCount}
                                  decreTaskCount={decreTaskCount}
                                  addRemoveDependency={addRemoveDependency}
                                />
                              )
                            }
                          })
                        }
                        <TaskInput
                          index={index}
                          dependencyIds={group.dependencyIds}
                          groupId={group.groupId}
                          addTask={addTask}
                        />
                      </TaskGroup>
                    </TaskBox>
                  )
                }
              }
            })
          }
        </Tasks>
      </div>
    );
  }
}

