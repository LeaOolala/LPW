export class Task{
    constructor(taskName, id){
    this.task = taskName
    this.id = id
    }
}

export class TaskManager{
    list = []
    // constructor(create, erase, mod){

    // }

    // ADD
    create(task){
        try{
            this.list.push({name:task, id:this.list.length})
            console.log(this.list)
        }
        catch{

        }
    }

    //erase
    erase(id){
        try{
            //if index > -1
            this.list.splice(id, 1)
            console.log(this.list)
        }
        catch{

        }
    }
    //MOD
}