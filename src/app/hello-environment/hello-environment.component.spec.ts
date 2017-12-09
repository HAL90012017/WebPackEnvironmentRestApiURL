import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloEnvironmentComponent } from './hello-environment.component';

describe('HelloEnvironmentComponent', () => {
  let component: HelloEnvironmentComponent;
  let fixture: ComponentFixture<HelloEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
