package com.javainuse.bootreact.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.bootreact.model.Task;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaskController {

	private List<Task> tasks = createList();


	@RequestMapping(value = "/tasks", method = RequestMethod.GET,
	produces = "application/json")
	public List<Task> getTasks() {
		return tasks;
	}
	
	@DeleteMapping(path = { "/tasks/{id}" })
	public Task delete(@PathVariable("id") int id) {
		Task deletedTsk = null;
		for (Task tsk : tasks) {
			if (tsk.getId()==(id)) {
				tasks.remove(tsk);
				deletedTsk = tsk;
				break;
			}
		}
		return deletedTsk;
	}
	
    @PostMapping(path = "/tasks", consumes = "application/json", produces = "application/json")
    public Task createEmployee(@RequestBody Task task) {
    	if (tasks.isEmpty()) {
            task.setId(1); // Imposta l'ID iniziale se la lista è vuota
        } else {
            // Ottieni l'ultimo elemento e incrementa l'ID
            int lastId = tasks.get(tasks.size() - 1).getId();
            task.setId(lastId + 1);
        }
        tasks.add(task);
        return task;
    }


    @GetMapping(path = { "/tasks/{id}" })
    public Task getEmployeeById(@PathVariable("id") int id) {
        for (Task tsk : tasks) {
            if (tsk.getId() == id) {
                return tsk;
            }
        }
        return null;
    }

    @PutMapping(path = "/tasks/{id}", consumes = "application/json", produces = "application/json")
    public Task updateEmployee(@PathVariable("id") int id, @RequestBody Task taskDetails) {
        for (Task tsk : tasks) {
            if (tsk.getId() == id) {
                tsk.setName(taskDetails.getName());
                return tsk;
            }
        }
        return null;
    }

	private static List<Task> createList() {
		List<Task> tempTasks = new ArrayList<>();
		
		Task tsk1 = new Task();
		tsk1.setName("tssssk1");
		tsk1.setId(1);

		Task tsk2 = new Task();
		tsk2.setName("tsk2");
		tsk2.setId(2);		
		
		tempTasks.add(tsk1);
		tempTasks.add(tsk2);
		
		return tempTasks;
	}

}