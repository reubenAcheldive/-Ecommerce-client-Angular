import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCatListComponent } from './render-cat-list.component';

describe('RenderCatListComponent', () => {
  let component: RenderCatListComponent;
  let fixture: ComponentFixture<RenderCatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderCatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
