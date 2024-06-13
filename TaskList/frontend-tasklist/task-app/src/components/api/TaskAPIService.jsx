import axios from "axios";

const TASK_BASE_REST_API_URL = 'http://localhost:8080/tasks';

export const getTaskList = () => axios.get(TASK_BASE_REST_API_URL)//OK
    
export const deleteTaskById = (id) => axios.delete(`${TASK_BASE_REST_API_URL}/${id}`);//OK

export const createTask = (task) => axios.post(TASK_BASE_REST_API_URL, task);//OK

export const getTaskById = (id) => axios.get(`${TASK_BASE_REST_API_URL}/${id}`);

export const updateTask = (id, task) => axios.put(`${TASK_BASE_REST_API_URL}/${id}`, task);
