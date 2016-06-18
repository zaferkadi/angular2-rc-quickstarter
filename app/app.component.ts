import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.component.html'
})
export class AppComponent {
  list = [];
  text= "hi";
  isSpecial = true;
  user = {};
  prompt(v, event){
    console.log(v, event);
  }
  constructor(){
    this.list = [1,2,3,4];

  }

}
