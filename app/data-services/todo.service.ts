import {ITodo, TodoList} from "./todo.model";


// export interface ITodo{
//     id: number;
//     name: String,
//     description: String,
//     when: String,
//     coordinator: String,
//     targetDate: String,
//     completedDate: String,
//     notes: String
//
// }
export class TodoService {
    getTodos(): TodoList {
        return TODO;
    }

}
const TODO: TodoList = {
    todoList: [
        {
            id: 1,
            name: 'todo1',
            description: 'do it',
            when: "PostHike",
            coordinator: "Scott James",
            targetDate: "November",
            completed: false,
        },
        {
            id: 2,
            name: 'todo2',
            description: 'do it do it',
            when: "PostHike",
            coordinator: "Scott James",
            targetDate: "November",
            completed: true
        },
        {
            id: 3,
            name: 'todo3',
            description: 'do it',
            when: "PostHike",
            coordinator: "Scott James",
            targetDate: "November",
            completed: true,
        },
        {
            id: 4,
            name: 'todo4',
            description: 'do it',
            when: "PostHike",
            coordinator: "Scott James",
            targetDate: "November",
            completed: false,
        }
    ]
}

