import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomPropertyComponent } from './custom-property/custom-property.component';
import { CustomEventComponent } from './custom-event/custom-event.component';
import { NgContentComponentComponent } from './ng-content-component/ng-content-component.component';
import { NgExampleComponent } from './ng-content-component/ng-example/ng-example.component';
import { LfMethodComponent } from './lf-method/lf-method.component';
import { LfChildComponent } from './lf-method/lf-child/lf-child.component';

@NgModule({
  declarations: [
    AppComponent,

    CustomPropertyComponent,
     CustomEventComponent,
     NgContentComponentComponent,
     NgExampleComponent,
     LfMethodComponent,
     LfChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
