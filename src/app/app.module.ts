import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaAlarmasComponent } from './lista-alarmas/lista-alarmas.component';
import { ModifcarComponent } from './modifcar/modifcar.component';
import { EditarAlarmasComponent } from './editar-alarmas/editar-alarmas.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AlarmsComponent } from './alarms/alarms.component';
import {MatRadioGroup,MatRadioButton,MatRippleModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent,
    ListadoComponent,
    MainNavComponent,
    FormularioComponent,
    ListaAlarmasComponent,
    ModifcarComponent,
    EditarAlarmasComponent,
    InformacionComponent,
    AlarmsComponent,
    MatRadioButton,
    MatRadioGroup,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'listado',
        component: ListadoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'form',
        component: FormularioComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'listAlarmas',
        component: ListaAlarmasComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'info',
        component: InformacionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'editAlarm',
        component: EditarAlarmasComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'mod',
        component: ModifcarComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'alarms',
        component: AlarmsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
