import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string = ''

  getParentMessage(){
    this.message = 'Hello from parent'
  }

  receiveMessage($event: string){
    this.message = $event;
  }
}
