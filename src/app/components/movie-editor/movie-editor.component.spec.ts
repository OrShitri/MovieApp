import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditorComponent } from './movie-editor.component';

describe('MovieEditorComponent', () => {
  let component: MovieEditorComponent;
  let fixture: ComponentFixture<MovieEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieEditorComponent]
    });
    fixture = TestBed.createComponent(MovieEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
