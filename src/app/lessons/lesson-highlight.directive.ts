import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

const colorsMap = {
  fresh: '#00ff00',
  next: '#0000ff'
};

@Directive({
  selector: '[appLessonHighlight]'
})
export class LessonHighlightDirective implements OnInit {
  @Input('appLessonHighlight') expiringDate: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const color = this.getColorByDate(this.expiringDate);

    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', `inset 0 0 0 1px ${color}`);
    }
  }

  private getColorByDate(date) {
    const now = new Date();
    const currentDateMs = new Date(now).setHours(0, 0, 0, 0);
    const twoWeeksAgoDateMs = new Date(new Date(now).setDate(now.getDate() - 14)).setHours(0, 0, 0, 0);
    const dateMs = new Date(date).setHours(0, 0, 0, 0);

    if (dateMs <= currentDateMs && dateMs >= twoWeeksAgoDateMs) {
      return colorsMap.fresh;
    } else if (dateMs > currentDateMs) {
      return colorsMap.next;
    }

    return '';
  }
}
