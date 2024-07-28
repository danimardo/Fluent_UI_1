import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRedditComponent } from './listado-reddit.component';

describe('ListadoRedditComponent', () => {
  let component: ListadoRedditComponent;
  let fixture: ComponentFixture<ListadoRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoRedditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
