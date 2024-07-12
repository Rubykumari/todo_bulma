import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[]=[
    new Todo('This is a text', true),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste amet iure molestiae accusamus doloribus hic vitae ipsum autem expedita. Culpa atque harum aperiam pariatur dicta dolore nisi molestias nihil?')
  ];
  constructor() { }

  getAllTodos(){
    return this.todos;
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  updateTodo(index:number, updatedTodo:Todo){
    this.todos[index] = updatedTodo;
  }
  deleteTodo(index:number){
    this.todos.splice(index, 1)
  }
}
