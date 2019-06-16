import { NgModule } from '@angular/core';
import { ScrollerComponent } from './scroller.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ScrollerComponent],
  imports: [
    CommonModule
  ],
  exports: [ScrollerComponent]
})
export class ScrollerModule { }
