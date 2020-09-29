// components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  // component
  let productListComponent: ProductListComponent;

  // fixture
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productListComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ProductListComponent', () => {
    expect(productListComponent).toBeTruthy();
  });
});
