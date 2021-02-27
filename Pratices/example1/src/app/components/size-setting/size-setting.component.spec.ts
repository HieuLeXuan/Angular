import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSettingComponent } from './size-setting.component';

describe('SizeSettingComponent', () => {
  let component: SizeSettingComponent;
  let fixture: ComponentFixture<SizeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
