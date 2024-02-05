import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfChildComponent } from './lf-child.component';

describe('LfChildComponent', () => {
  let component: LfChildComponent;
  let fixture: ComponentFixture<LfChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LfChildComponent]
    });
    fixture = TestBed.createComponent(LfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
