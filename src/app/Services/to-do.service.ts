import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiURL = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}
  getTodos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.apiURL);
  }
  addTodo(todo: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(this.apiURL, JSON.stringify(todo));
  }
  getTodoById(id: String): Observable<ToDo> {
    return this.httpClient.get<ToDo>(`${this.apiURL}/${id}`);
  }
  updateTodo(todo: ToDo): Observable<ToDo> {
    return this.httpClient.put<ToDo>(`${this.apiURL}/${todo.id}`, todo);
  }
  deleteTodo(todoId: String): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiURL}/${todoId}`);
  }
}
