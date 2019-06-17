import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'scroll-indicator',
  template: `<div class="scroll-container" [ngStyle]="{'background-color': backgroundColor, 'height': height}">
                <div class="scroll" id="scroller" [ngStyle]="{'background-color': color}">
                </div>
              </div>
            `,
  styleUrls: ['./scroll-indicator.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class ScrollerComponent implements OnInit {
  @Input() color: string;
  @Input() backgroundColor: string;
  @Input() height: string;
  constructor() { }

  ngOnInit() {
    this._checkInputs();
    window.onscroll = () => { this.handleScrollIndicator(); };
  }

  ngOnChanges() {
    this._checkInputs();
  }

  handleScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroller").style.width = scrolled + "%";
  }

  private _checkInputs() {
    this.color = this.color ? this.color : '#0ad0e6';
    this.backgroundColor = this.backgroundColor ? this.backgroundColor : 'rgba(82, 177, 152, 0.16)';
    this.height = this.height ? this.height : '15px';
  }
}
