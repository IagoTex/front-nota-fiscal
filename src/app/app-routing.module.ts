import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {DxDataGridModule, DxFormModule} from 'devextreme-angular';
import {ClienteCrudComponent} from "./pages/cliente/cliente-crud/cliente.crud.component";
import {LoginComponent} from "./pages/login/login.component";
import {ProdutoCrudComponent} from "./pages/produtos/produto-crud/produto.crud.component";
import {NotaFiscalCrudComponent} from "./pages/notas-fiscais/nota-fiscal-crud/nota.fiscal.crud.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cliente',
    component: ClienteCrudComponent,
    canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'produto',
    component: ProdutoCrudComponent,
    canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'nota',
    component: NotaFiscalCrudComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule {
}
