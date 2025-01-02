import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'tetiere',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.scss'
})
export class TetiereComponent {
  constructor(private router: Router) {}

  public Logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
