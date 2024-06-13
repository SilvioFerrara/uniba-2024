### Guida all'Installazione e all'Uso del Progetto TaskList

#### Requisiti Prerequisiti

Prima di iniziare, assicurati di avere installato quanto segue sul tuo sistema:

- **Java Development Kit (JDK)**: Versione consigliata per il backend Spring Boot.
- **Node.js e npm**: Versione consigliata per il frontend React.
- **Git**: Per clonare il repository del progetto da GitHub.
- **IDE**: Un ambiente di sviluppo integrato come IntelliJ IDEA, Eclipse o Visual Studio Code.

### Passo 1: Clonare il Repository da GitHub

1. Apri il terminale o la console sul tuo computer.
2. Esegui il seguente comando per clonare il repository GitHub del progetto TaskList:

```bash
git clone https://github.com/SilvioFerrara/uniba-2024.git
```
   Questo comando scaricherà il codice sorgente del progetto nella directory corrente.

#### Parte Backend (Spring Boot)

### Passo 2: Configurazione del Backend Spring Boot

1. **Importazione del Progetto**:
   - Apri il tuo IDE preferito (come IntelliJ IDEA, Eclipse, o simili).
   - Seleziona l'opzione per importare un progetto Maven esistente.
   - Naviga nella cartella clonata (`tasklist-project/backend`) e seleziona il file `pom.xml` per importare il progetto Spring Boot.

2. **Build del Progetto**:
   - Una volta importato, esegui un build del progetto per scaricare tutte le dipendenze necessarie.
 Apri il terminale del tuo IDE o usa il terminale del sistema operativo e digita:

   ```bash
   mvn clean install
   ```

3. **Avvio dell'Applicazione**: Avvia l'applicazione Spring Boot dal tuo IDE o utilizzando il comando Maven da terminale:

   ```bash
   mvn spring-boot:run
   ```

4. **Verifica dell'Endpoint**: Verifica che il backend sia in esecuzione correttamente visitando l'endpoint API previsto:
    `http://localhost:8080/tasks`

#### Parte Frontend (React)

### Passo 3: Configurazione del Frontend React

1. **Navigazione alla Cartella del Frontend**:
   - Apri un nuovo terminale o console.
   - Vai alla cartella del frontend del progetto clonato:

     ```bash
     cd uniba-2024\TaskList\frontend-tasklist\task-app
     ```

2. **Installazione delle Dipendenze**:
   - Esegui il seguente comando per installare tutte le dipendenze necessarie per il frontend React:

     ```bash
     npm install
     ```

3. **Avvio dell'Applicazione Frontend**:
   - Dopo aver configurato gli endpoint API, esegui il seguente comando per avviare il frontend React:

     ```bash
     npm start
     ```

   - Questo avvierà l'applicazione frontend React e la aprirà nel tuo browser predefinito all'indirizzo `http://localhost:3000`.
