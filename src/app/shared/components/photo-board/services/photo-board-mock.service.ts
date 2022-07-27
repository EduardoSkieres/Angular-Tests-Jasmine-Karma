import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotoBoardService } from './photo-board.service';
import { Photo } from 'src/app/shared/components/photo-board/interface/photo';
import { buildPhotoList } from '../test/build-photo-list';
@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
