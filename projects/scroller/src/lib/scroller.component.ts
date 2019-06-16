import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'scroll-indicator',
  templateUrl: './scroll-indicator.component.html',
  styleUrls: ['./scroll-indicator.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = () => { this.handleScrollIndicator(); };
  }

  handleScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroller").style.width = scrolled + "%";
  }
}
