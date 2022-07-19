import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { CommonModule } from '@angular/common';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoFrameComponent],
      imports: [CommonModule, LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy();
  })

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) once when called multiple times within debounce time`,
    fakeAsync(() => {
      fixture.detectChanges(); // Dispara o ngOnInit()
      let times = 0;
      component.liked.subscribe(() => times++);
      component.like();
      component.like();
      tick(500);
      expect(times).toBe(1);
    }));

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) twice when called multiple times outside debounce time`,
    fakeAsync(() => {
      fixture.detectChanges(); // Dispara o ngOnInit()
      let times = 0;
      component.liked.subscribe(() => times++);
      component.like();
      tick(500);
      component.like();
      tick(500);
      expect(times).toBe(2);
    }));

  it(`(D) Should display number of likes when (@Input likes is incremented)`,
    () => {
      fixture.detectChanges(); // Dispara o ngOnInit()
      component.likes++
      fixture.detectChanges(); // Realiza a ateração no DOM
      const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter')
      expect(element.textContent.trim()).toBe('1');
    });

  it(`(D) Should update aria-label when (@Input likes is incremented)`,
    () => {
      fixture.detectChanges(); // Dispara o ngOnInit()
      component.likes++
      fixture.detectChanges(); // Realiza a ateração no DOM
      const element: HTMLElement = fixture.nativeElement.querySelector('span')
      expect(element.getAttribute('aria-label')).toBe('1: people liked');
    });


  it(`(D) Should have aria-label with 0 (@Input likes)`,
    () => {
      fixture.detectChanges(); // Dispara o ngOnInit()
      const element: HTMLElement = fixture.nativeElement.querySelector('span')
      expect(element.getAttribute('aria-label')).toBe('0: people liked');
    });

  it(`(D) Should dysplay image with src and description when bond to properties`,
    () => {
      const description = 'some';
      const src = 'http://somesite.com/img.jpg';
      component.src = src;
      component.description = description;
      fixture.detectChanges(); // Dispara o ngOnInit()
      const img: HTMLElement = fixture.nativeElement.querySelector('img');
      expect(img.getAttribute('src')).toBe(src);
      expect(img.getAttribute('alt')).toBe(description);
    });

});
