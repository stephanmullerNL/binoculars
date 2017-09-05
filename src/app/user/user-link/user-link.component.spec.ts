import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLinkComponent } from './user-link.component';

describe('UserLinkComponent', () => {
  let component: UserLinkComponent;
  let fixture: ComponentFixture<UserLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
