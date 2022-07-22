import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private http: HttpClient) { }

  /**
   * getPhotos
   */
  public getPhotos() {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
  }


}
