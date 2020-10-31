import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-ui',
  templateUrl: './skeleton-ui.component.html',
  styleUrls: ['./skeleton-ui.component.scss'],
})
export class SkeletonUiComponent implements OnInit {
  @Input() skeletonWidth;
  @Input() skeletonHeight;
  @Input() skeletonCircle;

  constructor() {}

  ngOnInit(): void {}

  getStyles() {
    const skeletonStyles = {
      'width.%': this.skeletonWidth ? this.skeletonWidth : '',
      'height.px': this.skeletonHeight ? this.skeletonHeight : '',
      'border-radius': this.skeletonCircle ? '50%' : '',
    };
    return skeletonStyles;
  }
}
