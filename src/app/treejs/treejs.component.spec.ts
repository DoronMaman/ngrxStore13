import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreejsComponent } from './treejs.component';

describe('TreejsComponent', () => {
  let component: TreejsComponent;
  let fixture: ComponentFixture<TreejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
