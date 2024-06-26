import { Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgendamentosAdmComponent } from './agendamentos-adm/agendamentos-adm.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'agendamentos-adm', component: AgendamentosAdmComponent},
  { path: 'agendamentos', component: AgendamentosComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'usuario/new', component: NewUserFormComponent},
  { path: 'agendamentos/new', component: AgendamentoFormComponent}
];
