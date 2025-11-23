import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerzioComponent } from './verzio/verzio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerzioComponent],
  template: `<app-verzio></app-verzio>`
})
export class AppComponent {}
