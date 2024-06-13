
# Manuale Utente per l'Applicazione Web di Gestione Attività

## Introduzione

Questo manuale descrive come installare, configurare e utilizzare un'applicazione web per la gestione di un elenco di attività. L'applicazione è composta da un backend sviluppato con Java, Maven e Spring, e da un frontend creato con React. L'intera applicazione è containerizzata utilizzando Docker e il controllo di versione è gestito con Git.

## Prerequisiti

Prima di iniziare, assicurati di avere installato i seguenti software sul tuo sistema:

- Java Development Kit (JDK) 11 o superiore
- Maven
- Node.js e npm
- Docker
- Git

## Installazione

### Clonazione del Repository

Per iniziare, clona il repository GitHub contenente il progetto:

```bash
git clone https://github.com/SilvioFerrara/uniba-2024.git
cd uniba-2024.git
```

### Configurazione del Backend

1. Naviga nella directory del backend:

    ```bash
    cd uniba-2024\TaskList\backend-tasklist\bootreact
    ```

2. Compila il progetto Maven:

    ```bash
    mvn clean install
    ```

3. Esegui l'applicazione Spring Boot:

    ```bash
    mvn spring-boot:run
    ```

Il backend dovrebbe ora essere in esecuzione su `http://localhost:8080`.

### Configurazione del Frontend

1. Apri una nuova finestra di terminale e naviga nella directory del frontend:

    ```bash
    cd uniba-2024\TaskList\frontend-tasklist\task-app
    ```

2. Installa le dipendenze:

    ```bash
    npm install
    ```

3. Avvia l'applicazione React:

    ```bash
    npm start
    ```

Il frontend dovrebbe ora essere in esecuzione su `http://localhost:3000`.

### Utilizzo di Docker

Se preferisci eseguire l'applicazione utilizzando Docker, segui questi passaggi:

1. Assicurati di essere nella directory principale del progetto:

    ```bash
    cd uniba-2024
    ```

2. Costruisci le immagini Docker:

    ```bash
    docker-compose build
    ```

3. Avvia i container:

    ```bash
    docker-compose up
    ```

L'applicazione dovrebbe ora essere accessibile tramite `http://localhost:3000` per il frontend e `http://localhost:8080` per il backend.

## Utilizzo dell'Applicazione

### Interfaccia Utente

L'interfaccia utente dell'applicazione permette di gestire un elenco di attività. Le funzionalità principali includono:

- **Visualizzazione delle attività**: L'elenco delle attività viene mostrato nella pagina principale.
![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/8fdaf602-8b06-49ba-8b3b-d6370453ba6b)


- **Aggiunta di una nuova attività**: Utilizza il modulo nella parte inferiore della pagina per aggiungere una nuova attività.
![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/02924812-3790-4c5b-ab51-637dc8d350ef)

![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/2682456f-971d-4e99-ba98-1ff6f5c5178f)


- **Modifica di un'attività esistente**: Clicca sul pulsante "Update" accanto all'attività per modificarla.
![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/79d10c7b-466b-4cb8-b914-ed2475c0df1a)

![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/f6c83357-7acc-4b30-b8bc-8913d6e522bd)


- **Eliminazione di un'attività**: Clicca sul pulsante "Delete" accanto all'attività per eliminarla.
 ![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/dcbb2063-dcac-4288-8844-a0d1a485e054)

- **Completamento di un'attività**: Clicca sul pulsante "Complete" accanto all'attività per eliminarla e aumentare il punteggio "Score".
![image](https://github.com/SilvioFerrara/uniba-2024/assets/168025670/39144fc7-20ba-49be-983a-221bf64df6e0)

### Endpoint API

Il backend fornisce una API RESTful con i seguenti endpoint:

- **GET /tasks**: Recupera un elenco di attività.
- **POST /tasks**: Crea una nuova attività.
- **PUT /tasks/{id}**: Aggiorna un'attività esistente.
- **DELETE /tasks/{id}**: Elimina un'attività.

Esempio di utilizzo con `curl`:

- Recuperare l'elenco delle attività:

    ```bash
    curl -X GET http://localhost:8080/tasks
    ```

- Recuperare un attività:

    ```bash
    curl -X GET http://localhost:8080/tasks/1
    ```

- Creare una nuova attività:

    ```bash
    curl -X POST http://localhost:8080/tasks -H "Content-Type: application/json" -d "{\"name\": \"Nuova Attività\"}"
    ```

- Aggiornare un'attività esistente:

    ```bash
    curl -X PUT http://localhost:8080/tasks/1 -H "Content-Type: application/json" -d "{\"name\": \"Attività aggiornata\"}"
    ```

- Eliminare un'attività:

    ```bash
    curl -X DELETE http://localhost:8080/tasks/1
    ```
## Tecnologie utilizzate

- **Backend:**
  - Spring Boot 3

- **Frontend:**
  - ReactJS 18
  - Bootstrap (per la UI)
  - Axios (per le chiamate HTTP)

## Requisiti

- Node.js (per eseguire l'applicazione React)
- Java Development Kit (JDK) 17 o superiore
- IDE (consigliato: IntelliJ IDEA, Eclipse)

### Struttura del Progetto "TaskList"

#### Backend (Spring Boot)

- **boot-react/**
  - **src/**: Contiene il codice sorgente Java per il backend.
  - **pom.xml**: File di configurazione Maven per le dipendenze e la build del progetto.

#### Frontend (React)

- **emp-app/**
  - **public/**: Contiene l'HTML statico e altri asset pubblici.
  - **src/**: Contiene il codice sorgente React per il frontend.
  - **package.json**: File di configurazione di npm per le dipendenze e gli script.

### Documentazione Backend per il Progetto "TaskList"

Questa documentazione fornisce una panoramica del backend del progetto "Uniba TaskList", che utilizza Spring Boot per la gestione delle API RESTful per le operazioni CRUD (Create, Read, Update, Delete) su un elenco di attività (`Task`).

#### 1. Struttura del Progetto

Il progetto backend è strutturato con Spring Boot e include un modello semplice (`Task`), un controller (`TaskController`) per gestire le richieste HTTP, e una classe di avvio (`BootreactApplication`).

##### File di Configurazione Maven (`pom.xml`)

Il file `pom.xml` gestisce le dipendenze e la build del progetto utilizzando Maven.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.javainuse</groupId>
    <artifactId>bootreact</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>bootreact</name>
    <description>Demo project for Spring Boot</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <!-- Dipendenza per Spring Boot Starter Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Dipendenza per Spring Boot Starter Test (per i test unitari) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Plugin per la build di Spring Boot -->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

##### Modello `Task`

Il modello `Task` rappresenta un'entità con attributi `id` e `name`.

```java
package com.javainuse.bootreact.model;

public class Task {
    
    private int id;
    private String name;

    // Metodi getter e setter
}
```

##### Controller `TaskController`

Il controller `TaskController` gestisce le richieste HTTP per le operazioni CRUD sui task.

```java
package com.javainuse.bootreact.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

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
        Task deletedTask = null;
        for (Task task : tasks) {
            if (task.getId() == id) {
                tasks.remove(task);
                deletedTask = task;
                break;
            }
        }
        return deletedTask;
    }

    @PostMapping(path = "/tasks", consumes = "application/json", produces = "application/json")
    public Task createTask(@RequestBody Task task) {
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
    public Task getTaskById(@PathVariable("id") int id) {
        for (Task task : tasks) {
            if (task.getId() == id) {
                return task;
            }
        }
        return null;
    }

    @PutMapping(path = "/tasks/{id}", consumes = "application/json", produces = "application/json")
    public Task updateTask(@PathVariable("id") int id, @RequestBody Task taskDetails) {
        for (Task task : tasks) {
            if (task.getId() == id) {
                task.setName(taskDetails.getName());
                return task;
            }
        }
        return null;
    }

    private static List<Task> createList() {
        List<Task> tempTasks = new ArrayList<>();
        
        Task task1 = new Task();
        task1.setName("Task 1");
        task1.setId(1);

        Task task2 = new Task();
        task2.setName("Task 2");
        task2.setId(2);
        
        tempTasks.add(task1);
        tempTasks.add(task2);
        
        return tempTasks;
    }
}
```

##### Classe di Avvio `BootreactApplication`

La classe di avvio `BootreactApplication` avvia l'applicazione Spring Boot.

```java
package com.javainuse.bootreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BootreactApplication {

    public static void main(String[] args) {
        SpringApplication.run(BootreactApplication.class, args);
    }

}
```

#### 2. Configurazione e Avvio

Per avviare il backend:

- Importa il progetto in un IDE come IntelliJ IDEA o Eclipse.
- Assicurati che tutte le dipendenze Maven siano state scaricate correttamente.
- Esegui la classe `BootreactApplication` come applicazione Java per avviare il server backend Spring Boot.

#### 3. Test delle API

Puoi testare le API CRUD utilizzando strumenti come Postman o integrandole con il frontend React per l'interazione diretta con le operazioni CRUD sui task.


------------------------
### Documentazione Frontend per il Progetto "Uniba TaskList"

Questa documentazione fornisce una panoramica del frontend del progetto "Uniba TaskList", sviluppato con React per gestire un elenco di attività (tasks) tramite API RESTful.

#### 1. Struttura del Progetto Frontend

Il progetto frontend è strutturato con React e utilizza Axios per gestire le chiamate API al backend.

##### Componente Principale `App.js`

Il componente principale `App.js` costituisce il punto di ingresso dell'applicazione React.Esso include il componente ListTasksApp per visualizzare e gestire l'elenco delle attività.

```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskApp from './components/TaskApp';

function App() {
  return (
    <div className="App">
      <TaskApp/>
    </div>
  );
}

export default App;
```

##### Componente `ListTasksApp.js`

Il componente `ListTasksApp.js` visualizza l'elenco delle attività (tasks) e gestisce le operazioni CRUD tramite API.
Questo componente mostra l'elenco delle attività recuperate dal backend attraverso chiamate HTTP utilizzando Axios. Gli utenti possono eliminare, aggiornare e completare le attività. Le interazioni dell'utente sono gestite tramite bottoni che invocano le funzioni di TaskService per comunicare con il backend.
```jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTaskById, getTaskList } from './api/TaskAPIService';

export default function ListTasksApp() {
    const [tasks, setTasks] = useState([]);
    const [score, setScore] = useState(0); // Variabile di punteggio
    const navigate = useNavigate();

    useEffect(() => {
        getTasks();
    }, []);

    function getTasks() {
        getTaskList()
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }

    function deleteTask(id) {
        deleteTaskById(id)
            .then(() => {
                getTasks(); // Aggiorna l'elenco delle attività dopo la cancellazione
            })
            .catch(error => console.error('Error deleting task:', error));
    }

    function updateTask(id) {
        navigate(`/edit-task/${id}`);
    }

    function addNewTask() {
        navigate('/add-task');
    }

    function completeTask(id) {
        deleteTaskById(id)
            .then(() => {
                setScore(score + 1); // Incrementa il punteggio
                getTasks(); // Aggiorna l'elenco delle attività dopo il completamento
            })
            .catch(error => console.error('Error completing task:', error));
    }

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ flex: '1', textAlign: 'left' }}>Homework</h1>
                <h2 style={{ flex: '1', textAlign: 'center' }}>Score: {score}</h2>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Delete</th>
                            <th>Update</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td><button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete Task</button></td>
                                <td><button className="btn btn-warning" onClick={() => updateTask(task.id)}>Update Task</button></td>
                                <td><button className="btn btn-success" onClick={() => completeTask(task.id)}>Complete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-primary mb-2" onClick={addNewTask}>Add Task</button>
            </div>
        </div>
    );
}
```

##### Componente `TaskComponent.js`

Il componente `TaskComponent.js` gestisce la creazione e l'aggiornamento di una singola attività (task).Gli utenti inseriscono il nome dell'attività e possono inviare i dati al backend tramite Axios, gestito da TaskService.

```jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createTask, getTaskById, updateTask } from './api/TaskAPIService';

const TaskComponent = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getTaskById(id)
                .then(response => setName(response.data.name))
                .catch(error => console.error('Error fetching task:', error));
        }
    }, [id]);

    const saveOrUpdateTask = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError('Il campo nome non può essere vuoto.');
            return;
        }

        const task = { name };

        if (id) {
            updateTask(id, task)
                .then(() => navigate('/tasks'))
                .catch(error => console.error('Error updating task:', error));
        } else {
            createTask(task)
                .then(() => navigate('/tasks'))
                .catch(error => console.error('Error creating task:', error));
        }
    };

    const pageTitle = () => {
        return id ? <h2 className="text-center">Update Task</h2> : <h2 className="text-center">Add Task</h2>;
    };

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {pageTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="firstName"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateTask(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskComponent;
```

#### 2. Configurazione e Avvio

Per avviare il frontend:

- Assicurati che il backend sia in esecuzione correttamente su `http://localhost:8080`.
- Naviga nella directory del frontend (dove si trova `App.js`).
- Esegui `npm install` per installare tutte le dipendenze.
- Esegui `npm start` per avviare l'applicazione React.

#### 3. Utilizzo dell'Applicazione

- **ListTasksApp**: Mostra l'elenco delle attività con opzioni per eliminare, aggiornare e completare ciascuna attività.
- **TaskComponent**: Permette di aggiungere una nuova attività o aggiornare un'attività esistente.


------------------------
### Documentazione delle Interazioni del Progetto Task List

#### 1. Integrazione di Axios per le Richieste HTTP

Axios viene utilizzato per gestire le chiamate HTTP tra il frontend React e il backend Spring Boot:

- **getTaskList**: Effettua una richiesta GET per ottenere l'elenco delle attività.
- **deleteTaskById**: Invia una richiesta DELETE per eliminare un'attività specificata.
- **createTask**: Invia una richiesta POST per creare una nuova attività.
- **getTaskById**: Effettua una richiesta GET per ottenere i dettagli di un'attività specifica.
- **updateTask**: Invia una richiesta PUT per aggiornare i dettagli di un'attività esistente.

#### 2. Configurazione del Controller REST di Spring Boot

Nel backend Spring Boot, è configurato un controller REST (`TaskController`) per gestire le operazioni CRUD sulle attività:

```java
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tasks")
public class TaskController {

    private List<Task> tasks = createList();

    @GetMapping
    public List<Task> getTasks() {
        return tasks;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        // Logica per creare una nuova attività
        tasks.add(task);
        return task;
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable int id) {
        // Logica per recuperare un'attività per ID
        for (Task task : tasks) {
            if (task.getId() == id) {
                return task;
            }
        }
        return null;
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable int id, @RequestBody Task taskDetails) {
        // Logica per aggiornare un'attività per ID
        for (Task task : tasks) {
            if (task.getId() == id) {
                task.setName(taskDetails.getName());
                return task;
            }
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public Task deleteTask(@PathVariable int id) {
        // Logica per eliminare un'attività per ID
        Task deletedTask = null;
        for (Task task : tasks) {
            if (task.getId() == id) {
                tasks.remove(task);
                deletedTask = task;
                break;
            }
        }
        return deletedTask;
    }

    private List<Task> createList() {
        // Metodo per inizializzare un elenco di attività di esempio
        List<Task> tempTasks = new ArrayList<>();
        Task task1 = new Task(1, "Task 1");
        Task task2 = new Task(2, "Task 2");
        tempTasks.add(task1);
        tempTasks.add(task2);
        return tempTasks;
    }
}
```

#### 3. Documentazione del Flusso dei Dati

Il flusso dei dati nell'applicazione avviene nel seguente modo:

- **Componenti React**: Gli utenti interagiscono con l'interfaccia utente dei componenti React (`ListTasksApp` e `TaskComponent`) per visualizzare, aggiungere, aggiornare o eliminare attività.
- **Axios**: I componenti React utilizzano Axios per inviare richieste HTTP al backend.
- **Controller REST di Spring Boot**: Il controller REST riceve le richieste HTTP, gestisce la logica di business (come CRUD su attività) e restituisce le risposte.
- **Backend**: Utilizzando Spring Boot, il backend accede ai dati (in questo caso, una lista di attività) e fornisce le risposte JSON alle richieste Axios.

Questo flusso assicura un'interazione efficiente e sincronizzata tra frontend e backend, consentendo agli utenti di gestire facilmente l'elenco delle attività tramite un'interfaccia utente reattiva e responsiva.


