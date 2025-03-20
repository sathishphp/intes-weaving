import { Routes } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';

export default [
    { path: 'login', component: LoginComponent,pathMatch:'full' }
] as Routes;
