/*
* File: app.component.ts
* Author: Nagy Imre
* Copyright: 2025, Nagy Imre
* Group: Szoft II-E
* Date: 2025-11-23
* Github: https://github.com/nagy-imre
* Licenc: MIT
*/
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
