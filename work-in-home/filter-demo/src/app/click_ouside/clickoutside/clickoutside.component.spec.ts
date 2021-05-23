import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickoutsideComponent } from './clickoutside.component';

describe('ClickoutsideComponent', () => {
  let component: ClickoutsideComponent;
  let fixture: ComponentFixture<ClickoutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickoutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickoutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
