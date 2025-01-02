import { ApplicationConfig } from '@angular/core';
import { ApiHttpInterceptor } from './http-interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
  ],
};

