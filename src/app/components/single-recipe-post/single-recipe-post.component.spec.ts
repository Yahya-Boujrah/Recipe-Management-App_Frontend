import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipePostComponent } from './single-recipe-post.component';

describe('SingleRecipePostComponent', () => {
  let component: SingleRecipePostComponent;
  let fixture: ComponentFixture<SingleRecipePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleRecipePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
