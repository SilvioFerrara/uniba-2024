
import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updateTask, createTask, getTaskById} from "./api/TaskAPIService";



const TaskComponent = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateTask = (e) => {
        e.preventDefault();

        // Controllo se il campo name è vuoto
        if (!name.trim()) {
            setError('Il campo nome non può essere vuoto.');
            return;
        }

        const task = {name}

        console.log(task);
        if(id){
            updateTask(id, task).then((response) => {
                navigate('/tasks')
            }).catch(error => {
                console.log(error)
            })

        }else{
            createTask(task).then((response) =>{

                console.log(response.data)
    
                navigate('/tasks');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        if(id){
            getTaskById(id).then((response) =>{
                setName(response.data.name)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Task</h2>
        }else{
            return <h2 className = "text-center">Add Task</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateTask(e)} >Submit </button>
                                {/* <Link to="/tasks" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default TaskComponent