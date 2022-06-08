import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:any={};
  email:string='';
  gender:string=''

  onSubmit(form:NgForm){
    console.log(form.value);
    this.name.firstname = form.value.name.firstname;
    this.name.lastname = form.value.name.lastname;
    this.email = form.value.email;
    this.gender = form.value.gender;
    form.reset();
  }
}
