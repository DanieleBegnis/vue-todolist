/* Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, 
visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi":
 cliccando sul pulsante, 
 il testo digitato viene letto e utilizzato per creare un nuovo todo, 
 che quindi viene aggiunto alla lista dei todo esistenti. */

 const { createApp } = Vue;

createApp({
    data() {
        return {
            todo : [
                {
                    text: 'portare il cane a spasso',
                        done: false,
                    }, {
                        text: 'fare i compiti',
                        done: false,
                    }, {
                        text: 'fare la spesa',
                        done: false,
                    },{
                        text: 'buttare fuori la spazzatura',
                        done: true,
                    },{
                        text: 'fare gli auguri alla mamma',
                        done: true,
                    },{
                        text: 'dipingere modelli',
                        done: false,
                    },
                ],
            newUserTask:'',
        };
    },
    methods: {
        removeTodo(index) {
            this.todo.splice(index, 1);
        },
        addNewUserTask() {
            const newTodo = {
                text: this.newUserTask,
                done: false
            }
           this.todo.unshift(newTodo);
           this.newUserTask= ''
        }
    }
}).mount('#app');