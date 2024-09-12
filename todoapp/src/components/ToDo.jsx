import React from 'react'
import { useState } from 'react'


const ToDo = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    // function that Handles The Input Box 

    function handleInput(event) {
        // event: synthatic events
        setNewTask(event.target.value)

    }

    // function To add the Task 
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(T => [...T, newTask])
            setNewTask("")
        }
    }

    // function To delete the Task 
    function DeleteTask(index) {

        let updateTask = tasks.filter((_, i) => i !== index)
        setTasks(updateTask)
    }

    // function To moveUp the Task 
    function moveUpTask(index) {


        if (index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            console.log(updateTasks)
            setTasks(updateTasks)
        }
    }

    // function To moveDown the Task 
    function moveDownTask(index) {
        if (index < tasks.length - 1) {
            let updateTask = [...tasks];
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
            setTasks(updateTask)
        }
    }
    // function To edit the Task 
    function EditTask() {

    }

    return (
        <div className='container my-3'>
            {/* heading start */}
            <h1>ToDo app</h1>
            {/* heading end */}
            {/* user-input box start */}
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                    placeholder="Recipient's username"
                    value={newTask}
                    onChange={handleInput}
                />
                <button className="input-group-text bg-success text-primary btn"
                    id="basic-addon2" onClick={addTask}>addtask</button>
            </div>
            {/* user-input box end*/}
            <ul>
                {
                    tasks.map((task, index) => {
                        return <li key={index}>
                            <span>{task}</span>
                            <button onClick={() => DeleteTask(index)}><i className="bi bi-trash3"></i></button>
                            <button onClick={() => moveUpTask(index)}>☂</button>
                            <button onClick={() => moveDownTask(index)}><i className="bi bi-arrow-down"></i></button>
                            <button onClick={() => EditTask(index)}><i className="bi bi-pen"></i></button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ToDo
