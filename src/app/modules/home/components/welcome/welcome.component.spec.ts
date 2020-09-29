// components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent }          from './welcome.component';

describe('WelcomeComponent', () => {
  // component
  let welcomeComponent: WelcomeComponent;

  // fixture
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    welcomeComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create WelcomeComponent', () => {
    expect(welcomeComponent).toBeTruthy();
  });
});
