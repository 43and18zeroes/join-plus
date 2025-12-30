  import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {
  overlayVisible = signal(true);
  floatToCorner = signal(false);

  constructor() {
    setTimeout(() => this.floatToCorner.set(true), 500);
    setTimeout(() => this.overlayVisible.set(false), 1500);
  }
}
