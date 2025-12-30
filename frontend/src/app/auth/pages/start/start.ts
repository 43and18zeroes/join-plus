  import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {
  // Overlay sichtbar für 1500ms
  overlayVisible = signal(true);

  // Nach 500ms beginnt die "float to corner"-Animation
  floatToCorner = signal(false);

  constructor() {
    // Start-Timeline
    setTimeout(() => this.floatToCorner.set(true), 500);
    setTimeout(() => this.overlayVisible.set(false), 1500);
  }
}
