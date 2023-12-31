import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HomeHeaderComponent;
  let fixture: ComponentFixture<HomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
