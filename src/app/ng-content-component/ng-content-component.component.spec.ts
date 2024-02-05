import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentComponentComponent } from './ng-content-component.component';

describe('NgContentComponentComponent', () => {
  let component: NgContentComponentComponent;
  let fixture: ComponentFixture<NgContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentComponentComponent]
    });
    fixture = TestBed.createComponent(NgContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
