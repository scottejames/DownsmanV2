export interface ITodo{
    id: number;
    name: String,
    description: String,
    when: String,
    coordinator: String,
    targetDate: String,
    completed: Boolean

}

export interface TodoList{
    todoList: ITodo[]
}