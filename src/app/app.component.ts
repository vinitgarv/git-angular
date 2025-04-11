import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // name:string="Vinit"
  // data:string | number= "hello"
  // other:any=true

  // updatedName() {
  //   this.data=20;
  //   this.name="Garg"


  //   //
  //   this.other="anil"

  //   //
  //   this.other=30

  //   //
  //   this.other={}
  // }


  // updateVar() {
  //   let x=30;

  // }

  // sum(a:number,b:number) {
  //   console.log(a+b)

  // }
  
}
