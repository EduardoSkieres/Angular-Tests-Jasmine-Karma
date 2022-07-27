import { Photo } from 'src/app/shared/components/photo-board/interface/photo';
export function buildPhotoList(): Photo[] {
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
