import { 
Component,
Input,
OnChanges,
SimpleChanges,
DoCheck,
ContentChild,
AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lf-child',
  templateUrl: './lf-child.component.html',
  styleUrls: ['./lf-child.component.css']
})
export class LfChildComponent implements 
OnChanges, 
DoCheck,
AfterContentInit{
  
  // It will use when there is any change occur during Input tag
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['InputField']) {
      const currentValue = changes['InputField'].currentValue;
      const previousValue = changes['InputField'].previousValue;
  
      console.log(`Input property changed from ${previousValue} to ${currentValue}`);
    }
  }

  @Input() InputField!:string
  changeDetectionCount: number = 0;
  @ContentChild('contentChild') contentChildValue: any;

  // Whenever change detection runs, Angular calls the ngDoCheck method.
  //It can be used to implement custom change detection logic or perform additional checks outside Angular's default change detection mechanism.
  //In this example, the child component increments the changeDetectionCount every time ngDoCheck is triggered.
  
  ngDoCheck(): void {
    this.changeDetectionCount++
    console.log('ngDoCheck triggered in ChildComponent');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit triggered in ChildComponent');
  }


}
