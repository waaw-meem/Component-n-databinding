import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrls: ['./custom-event.component.css']
})
export class CustomEventComponent {
  @Output() onUserClick = new EventEmitter<string>()
  @Output() onUserReq = new EventEmitter<number>()

  userClick(){
    this.onUserClick.emit()
  }

  getNumber(){
    this.onUserReq.emit()
  }
}
