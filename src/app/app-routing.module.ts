import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CuacaComponent } from './cuaca/cuaca.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ForexComponent } from './forex/forex.component';
import { LoginComponent } from './login/login.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { OtentikasiGuard } from './otentikasi.guard';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "cuaca", component : CuacaComponent, canActivate : [OtentikasiGuard]},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "dashboard", component: DashboardComponent, canActivate : [OtentikasiGuard]},
  { path: "dashboard2", component: Dashboard2Component, canActivate : [OtentikasiGuard]},
  { path: "forex",component: ForexComponent, canActivate : [OtentikasiGuard]  },
  { path: "mahasiswa", component: MahasiswaComponent, canActivate : [OtentikasiGuard]},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
