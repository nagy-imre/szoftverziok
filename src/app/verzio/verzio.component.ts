import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verzio',
  standalone: true,       // ⚡ standalone komponens
  imports: [CommonModule], // kell az *ngFor-hoz
  templateUrl: './verzio.component.html',
  styleUrls: ['./verzio.component.css']
})
export class VerzioComponent {
  szoftverVerziok = [
    { verzio: '3.0.0', datum: '2025-02-10', csapat: 'Alpha', hibak: 5, ujFunkciok: 3 },
    { verzio: '2.5.1', datum: '2024-12-01', csapat: 'Beta', hibak: 12, ujFunkciok: 1 },
    { verzio: '2.4.0', datum: '2024-09-20', csapat: 'Alpha', hibak: 3, ujFunkciok: 4 },
    { verzio: '2.3.5', datum: '2024-07-15', csapat: 'Gamma', hibak: 8, ujFunkciok: 0 },
    { verzio: '2.3.0', datum: '2024-05-30', csapat: 'Alpha', hibak: 6, ujFunkciok: 2 },
    { verzio: '2.2.1', datum: '2024-03-01', csapat: 'Beta', hibak: 15, ujFunkciok: 0 },
    { verzio: '2.2.0', datum: '2024-01-15', csapat: 'Gamma', hibak: 4, ujFunkciok: 1 },
    { verzio: '2.1.5', datum: '2023-11-05', csapat: 'Alpha', hibak: 10, ujFunkciok: 0 }
  ];

  osszesHiba = 0;

  ngOnInit() {
    this.osszesHiba = this.szoftverVerziok.reduce((sum, verzio) => sum + verzio.hibak, 0);
  }
}
