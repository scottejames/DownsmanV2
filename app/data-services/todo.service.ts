import {ITodo} from "./todo.model";


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
    getTodos(): ITodo[] {
        return TODO;
    }

}
const TODO: ITodo[] =
    [
        {
            id: 1,
            name: 'todo1',
            description: 'do it',
            when: "Post",
            coordinator: "Scott James",
            targetDate: "November",
            completed: false,
        },
        {
            id: 2,
            name: 'todo2',
            description: 'do it do it',
            when: "Pre",
            coordinator: "Scott James",
            targetDate: "November",
            completed: true
        },
        {
            id: 3,
            name: 'todo3',
            description: 'do it',
            when: "Post",
            coordinator: "Scott James",
            targetDate: "November",
            completed: true,
        },
        {
            id: 4,
            name: 'todo4',
            description: 'do it',
            when: "N/a",
            coordinator: "Scott James",
            targetDate: "November",
            completed: false,
        }
    ]


