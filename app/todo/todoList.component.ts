import {Component, OnInit} from '@angular/core'
import {ITodo} from "../data-services/todo.model";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import {TodoService} from "../data-services/todo.service";
import {RefDataService} from "../data-services/refData.service";

@Component({
    templateUrl: '/app/todo/todoList.component.html',
})

export class TodoListComponent implements OnInit {
    todoForm: FormGroup;
    todoListFormArray: FormArray;
    todos: ITodo[];

    constructor(private todoService: TodoService, private refData: RefDataService) {
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
        this.todoListFormArray = new FormArray([]);

        if (this.todos) {

            for (let i of this.todos)
                this.todoListFormArray.push(new FormGroup({
                    id: new FormControl(i.id),
                    name: new FormControl(i.name),
                    description: new FormControl(i.description),
                    when: new FormControl(i.when),
                    coordinator: new FormControl(i.coordinator),
                    targetDate: new FormControl(i.targetDate),
                    completed: new FormControl(i.completed)
                }));
        } else {
            this.todoListFormArray.push(new FormGroup({
                id: new FormControl(''),
                name: new FormControl('name'),
                description: new FormControl(),
                when: new FormControl(),
                coordinator: new FormControl(),
                targetDate: new FormControl(),
                completed: new FormControl()
            }));
        }


        this.todoForm = new FormGroup({
            todoList: this.todoListFormArray
        });

    }
    addNew(){
        this.todoListFormArray.push(new FormGroup({
            id: new FormControl(''),
            name: new FormControl(''),
            description: new FormControl(),
            when: new FormControl(),
            coordinator: new FormControl(),
            targetDate: new FormControl(),
            completed: new FormControl()
        }));
    }
    save(todo: ITodo[]) {
        console.log(todo)

    }
    cancel(){
        console.log('cancel');
    }
}