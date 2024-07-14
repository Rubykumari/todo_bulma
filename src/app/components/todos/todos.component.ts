import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/shared/todo.model';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos:Todo[]=[];
  txtLength='';
  constructor(private dataService: DataService){}

  ngOnInit():void{
    this.todos = this.dataService.todos;
  }
  onFormSubmit(forms: NgForm){
    // console.log(forms);
  this.txtLength = forms.value.text.length;
  console.log(this.txtLength);
    if(!forms.valid) return alert('Invalid fields'); 
    this.dataService.addTodo(new Todo(forms.value.text));
  }
}
