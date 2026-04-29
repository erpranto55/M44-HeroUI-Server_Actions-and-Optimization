import TaskCard from '@/componants/TaskCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks : {tasks.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    tasks.map(task =>
                        <TaskCard
                            key={task.id}
                            task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;