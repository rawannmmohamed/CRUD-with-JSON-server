import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];
  newToDo: ToDo = {} as ToDo;
  constructor(private todoService: ToDoService) {}
  ngOnInit() {
    this.getToDos();
  }
  getToDos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
  addTodo(): void {
    const newtodo = {
      id: this.newToDo.id,
      title: this.newToDo.title,
      completed: false,
    };
    this.newToDo = newtodo;
    this.todoService
      .addTodo(this.newToDo)
      .subscribe((todo) => this.todos.push(todo));
  }
  deleteTodo(todoId: String): void {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    });
  }
}
