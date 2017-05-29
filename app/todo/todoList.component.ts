import {Component, OnInit} from '@angular/core'
import {ITodo, TodoList} from "../data-services/todo.model";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import {TodoService} from "../data-services/todo.service";

@Component({
    templateUrl: '/app/todo/todoList.component.html',
})

export class TodoListComponent implements OnInit {
    todoForm: FormGroup;
    todoListControls: FormArray;
    todoList: TodoList;

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todoList = this.todoService.getTodos();
        this.todoListControls = new FormArray([]);

        for (let todo of this.todoList.todoList) {
            console.log(todo);

            var group = new FormGroup({
                id: new FormControl(),
                name: new FormControl(),
                description: new FormControl(),
                when: new FormControl(),
                coordinator: new FormControl(),
                targetDate: new FormControl(),
                completed: new FormControl(),
            });
            this.todoListControls.push(group);
        }

        this.todoForm = new FormGroup({
            todoList: this.todoListControls
        });
        console.log(this.todoForm)
        // // Setup defaul values if we have specified an entry, this means we are using the form to edit
        // if (this.todoList)
        //     this.todoForm.patchValue(this.todoList);
    }

    save(todo: ITodo[]) {
        console.log(todo)

    }
}