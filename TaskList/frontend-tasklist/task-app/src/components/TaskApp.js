import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListTasksApp from "./ListTasks";
import UpdateTaskApp from "./UpdateTask";

export default function TaskApp() {
    return (
        <div>
          <BrowserRouter>
        
            <div className= "container">
              <Routes>
                  <Route path = "/" element = { <ListTasksApp /> }></Route>
                  <Route path = "/tasks" element = { <ListTasksApp /> }></Route>
                  <Route path = "/add-task" element = { <UpdateTaskApp />} ></Route>
                  <Route path = "/edit-task/:id" element = { <UpdateTaskApp />}></Route>
                </Routes>
            </div>

            </BrowserRouter>
        </div>
      );

}
