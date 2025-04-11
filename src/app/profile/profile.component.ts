import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  count:number=0;
  handleIncreament() {
    this.count=this.count+1;
    
  }
  handleDecreament() {
    this.count=this.count-1;
  }

  handleReset() {
    this.count=0;
  }


}
