import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { deleteTaskById, getTaskList } from "./api/TaskAPIService";

export default function ListTasksApp(){
    const [tasks, setEmployee] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(null)
    const [score, setScore] = useState(0); // Variabile di punteggio
    
    const navigate = useNavigate()

    useEffect(
        () => getTasks(), []
    )

    function getTasks() {
        console.log('Fetching Task')
        getTaskList()
            .then((response) => onSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    function onSuccess(response) {
        console.log(response);
        setEmployee(response.data);
    }

    function onError(response) {
        console.log(response);
    }

    function deleteEmployee(id) {
        console.log('delete task ' + id);
        deleteTaskById(id)
            .then(() => {
                setDeleteStatus('Deleted task with ' + id + ' successfully.')
                getTasks()
            })
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }
    
    function updateTask(id) {
        navigate(`/edit-task/${id}`)
        console.log('update task' +id);
    }
     function addNewEmployee() {
        navigate('/add-task')
        console.log('/add-task')
    }

    function completeEmployee(id) {
        console.log('complete task ' + id);
        deleteTaskById(id)
            .then(() => {
                setScore(score + 1); // Incrementa il punteggio
                setDeleteStatus('Completed task with ' + id + ' successfully.');
                getTasks();
            })
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'));
    }
        return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ flex: '1', textAlign: 'left' }}>HomeWork</h1>
                <h2 style={{ flex: '1', textAlign: 'center' }}>Score: {score}</h2>
            </div>
            <div>
                <table  className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Delete</th>
                            <th>Update</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                task => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.name}</td>
                                        <td><button className="btn btn-danger" onClick={() => deleteEmployee(task.id)}>Delete Task</button></td>
                                        <td><button className="btn btn-warning" onClick={() => updateTask(task.id)}>Update Task</button></td>
                                        <td><button className="btn btn-success" onClick={() => completeEmployee(task.id)}>Complete</button></td>
                                    </tr>
                                )

                            )
                        }
                    </tbody>
                </table>
                {/* <Link to = "/add-task" className = "btn btn-primary mb-2" > Add Task </Link> */}
                <button className = "btn btn-primary mb-2" onClick={addNewEmployee }>Add Task</button>
            </div>
            

        </div>
    )
}