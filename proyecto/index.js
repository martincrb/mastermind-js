const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Tarea: valor booleano y descripcion

let taskList = [];

function addTask(taskList, taskDescription) {
    taskList.push({done: false, description: taskDescription});
}

function printTaskList(taskList) {
    // 1. [] Sacar la basura
    // 2. [x] Lavar los platos
    for (let i = 0; i < taskList.length; ++i) {
        if (taskList[i].done) {
            // tarea realiza
            console.log((i + 1) + '. [x] ' + taskList[i].description);
        } else {
            // tarea no realizada
            console.log((i + 1) + '. [ ] ' + taskList[i].description);
        }
    }
}
// Primer modo: lectura de tareas necesarias

function mode1(taskList) {
    rl.question('Introduce una nueva tarea (fin si terminas)', function(taskDesc) {
        switch (taskDesc) {
            case 'fin':
                console.log('No se introducen ya más tareas');
                mode2(taskList);
                break;
            case 'exit':
                rl.close();
                break;
            default:
                addTask(taskList, taskDesc);
                console.log('La lista de tareas actual es:');
                printTaskList(taskList);
                mode1(taskList);
        }
    });
}

function markTaskAsDone(taskList, index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].done = true;
    } else {
        console.log('Invalid task number');
    }
}

function checkAllDone(taskList) {
    for (let task of taskList) {
        if (!task.done) return false;
    }
    return true;
}

function mode2(taskList) {
    printTaskList(taskList);
    rl.question('Qué tarea has realizado? (1 - N)', function(taskNumber) {
        switch (taskNumber) {
            case 'fin':
            case 'exit':
                console.log('Bye bye');
                rl.close();
                break;
            default:
                markTaskAsDone(taskList, taskNumber - 1);
                // Comprobar si estan todas hechas y cerrar el programa
                if (checkAllDone(taskList)) {
                    console.log('Muy bien! Has completado todo el trabajo!');
                    rl.close();
                } else {
                    mode2(taskList);
                }
        }
    });
}

mode1(taskList);

// Segundo modo: marcar las tareas realizadas