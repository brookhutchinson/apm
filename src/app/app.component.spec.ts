import { TestBed }             from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent }        from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // modules
      imports: [ RouterTestingModule ],
      // components
      declarations: [ AppComponent ],
    }).compileComponents();
  });

  it('should create AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
