import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {

 const { tasks } = useContext(TaskListContext);

 return (
  <div>
   {tasks.length === 0 && <div className="no-tasks">No Tasks</div>}
   <ul className="list">
    {tasks.map((task) => (
     < Task
      task={task}
      key={task.id}
     />
    ))}
   </ul>
  </div>
 );
};

export default TaskList;
