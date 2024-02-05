import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgExampleComponent } from './ng-example.component';

describe('NgExampleComponent', () => {
  let component: NgExampleComponent;
  let fixture: ComponentFixture<NgExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgExampleComponent]
    });
    fixture = TestBed.createComponent(NgExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
