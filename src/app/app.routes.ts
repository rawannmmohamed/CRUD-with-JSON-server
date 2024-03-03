import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    component: TodosComponent,
    title: 'todos',
  },
  {
    path: 'todos/:id',
    component: TodoDetailsComponent,
    title: 'todo Details',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'not found',
  },
];
