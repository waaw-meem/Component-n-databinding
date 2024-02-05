import { Component,Input } from '@angular/core';
import { MyCustomType } from './customer-typepost';

@Component({
  selector: 'app-custom-property',
  templateUrl: './custom-property.component.html',
  styleUrls: ['./custom-property.component.css']
})
export class CustomPropertyComponent {
  @Input() childMessage!:string
  @Input() customerID!:number
  @Input() showChildMessage!:boolean

  @Input() userChildObject!:{ name: string; age: number; }
  @Input() childArray!:any[]

  private _myInputData:string =''

  @Input() set myInputData(data:string){
    this._myInputData = `Modified in child: ${data}`
  }

  get myInputData(): string {
    return this._myInputData;
  }

  @Input() customInstance!:MyCustomType
}
