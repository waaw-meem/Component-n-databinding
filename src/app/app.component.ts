import { Component, Input } from '@angular/core';
import { MyCustomType } from './custom-property/customer-typepost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-n-databinding-task';

  parentMessage:string = 'Welcome to the new Module';
  customerIDParent:number = 12439
  showParentMessage:boolean = false

  userObject: { name: string, age: number } = { name: 'John', age: 25 };
  parentArray:any[] = ['Wali','Muhammad','Memon']

  parentData:string = ''
  parentInstance: MyCustomType = new MyCustomType('', 0);

  toggleMessage(){
    this.showParentMessage = !this.showParentMessage
  }

  emitEvent(){
    this.parentData = 'Data From Parent'
  }


  //Output decorator code

  message:string=''
  numberDigits!:number

  displayChildData(){
    this.message = 'Wali Output Decorator is working!'
  }

  displayUserReq(){
    this.numberDigits = 4231
  }


}
