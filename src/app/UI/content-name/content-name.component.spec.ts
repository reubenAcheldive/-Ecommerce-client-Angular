import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNameComponent } from './content-name.component';

describe('ContentNameComponent', () => {
  let component: ContentNameComponent;
  let fixture: ComponentFixture<ContentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
