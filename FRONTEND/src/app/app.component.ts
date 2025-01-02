import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TetiereComponent } from './components/tetiere/tetiere.component';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TetiereComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  showTetiere: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const token = localStorage.getItem('token');
      const login = localStorage.getItem('login');
      const currentUrl = this.router.url;
      this.showTetiere = !!token && !!login && !['/login', '/register'].includes(currentUrl);
    });
  }
}
