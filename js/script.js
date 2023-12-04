const {createApp}=Vue

createApp({
    data(){
       return{
        toDoList:[
            {
                text: "comprare le scarpe da calcio nuove",
                done: true
            },
            {
                text: "andare a correre",
                done: false
            },
            {
                text: "imparare a sviluppare con js",
                done: true
            },
            {
                text: "giocare alla play con gli amici",
                done: false
            },
            {
                text: "visitare un città europea",
                done: false
            },
        ]

       } 
    },
    methods:{
        removeTodoElement(indexToBeRemoved){
            this.toDoList.splice(indexToBeRemoved, 1);
        }
    }
}).mount('#app')