import React, { useState } from 'react'
import { MdModeEdit, MdDeleteSweep } from 'react-icons/md';
import { FaCheckDouble } from "react-icons/fa6";

const TaskItem = ({ task, deleteTask, toggleCheck, saveTask }) => {
    const [editableTask, setEditableTask] = useState(task.taskName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        saveTask(task.taskName, editableTask);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditableTask(e.target.value);
    };

    return (
        <li className='items'>
            <div className="items-text">
                <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => toggleCheck(task.taskName)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editableTask}
                        onChange={handleChange}
                        autoFocus
                    />
                ) : (
                    <p className={task.checked ? 'isChecked' : ''}>
                        {task.taskName}
                    </p>
                )}
            </div>
            <div className="icons-container">

                {!isEditing ? (
                    <MdModeEdit className='edit' onClick={handleEdit} />
                ) : (
                    <FaCheckDouble className='save' onClick={handleSave} />
                )}
                <MdDeleteSweep className='delete-icon' onClick={() => deleteTask(task.taskName)} />
            </div>
        </li>
    )
}

export default TaskItem