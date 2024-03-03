import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss',
})
export class TodoDetailsComponent implements OnInit {
  toDo: ToDo | undefined;
  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getToDo();
  }
  getToDo() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodoById(id).subscribe((todo) => {
      this.toDo = todo;
    });
  }
  updateToDo() {
    if (this.toDo) {
      this.todoService.updateTodo(this.toDo).subscribe(() => {
        this.router.navigate(['todos']);
      });
    }
    else {
      this.router.navigate(['/404']);
    }
  }
}
