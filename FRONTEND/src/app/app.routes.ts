import { Routes } from '@angular/router';
import { ObjektsDisplayComponent } from './components/objekts-display/objekts-display.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AccountComponent } from './components/account/account.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

export const routes: Routes = [
  { path: 'objekts', component: ObjektsDisplayComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: 'login' }
];
