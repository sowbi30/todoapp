import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');

    // console.log(task);

    function handleInputValues(e) {
        setTask(e.target.value);
    }
    function handleAddTask(e) {
        e.preventDefault();
        if (task.trim() === "") return;
        addTask(task);
        setTask('')
    }

    return (

        <form
            className='inputField'
            onSubmit={handleAddTask}>
            <input
                type="text"
                value={task}
                placeholder='add Item'
                onChange={handleInputValues} />
            <button>+</button>
        </form>
    )
}

export default TaskInput