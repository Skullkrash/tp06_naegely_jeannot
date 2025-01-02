import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  providers: [ApiService],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  public login: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {
    if (localStorage.getItem('token') && localStorage.getItem('login')) {
      this.router.navigate(['/objekts']);
    }
    else {
      if (localStorage.getItem('token')) { localStorage.removeItem('token'); }
    }
  }

  public attemptLogin(): void {
    this.errorMessage = '';

    this.apiService.loginUser(this.login, this.password).pipe(take(1)).subscribe(
      (res) => {
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('login', res.userLogin);
        this.router.navigate(['/objekts']);
      },
      (err) => {
        this.errorMessage = err.error;
        console.error(err);
      }
    );
  }
}
