import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './interface/photo';

import { PhotoBoardComponent } from './photo-board.component';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { PhotoBoardModule } from './photo-board.module';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let index = 0; index < 8; index++) {
    photos.push({
      id: (index + 1).toString(),
      url: '',
      description: ''
    });
  }
  return photos;
}

describe('PhotoBoardComponent', () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    fixture.detectChanges();
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    }
    component.ngOnChanges(change);
    expect(component.rows.length).withContext('Number of row').toBe(2);
    expect(component.rows[1].length).withContext('Number of columns from the first row').toBe(4)
    expect(component.rows[1].length).withContext('Number of columns from the second row').toBe(4)

  })
});
