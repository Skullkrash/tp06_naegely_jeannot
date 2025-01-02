import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Objekt } from '../../models/objekts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-objekts-display',
  standalone: true,
  imports: [CommonModule],
  providers: [ApiService],
  templateUrl: './objekts-display.component.html',
  styleUrl: './objekts-display.component.scss'
})
export class ObjektsDisplayComponent {
  login: string = '';
  objekts$: Observable<Objekt[]>;

  constructor(private apiService: ApiService) {
    this.login = localStorage.getItem('login') || '';
    this.objekts$ = apiService.getCatalogue();
  }
}
