import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjanlatkeresComponent} from './ajanlatkeres/ajanlatkeres.component'
import {ArComponent} from './ar/ar.component'
import {ReferenciaComponent} from './referencia/referencia.component'
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'ajanlatkeres', component: AjanlatkeresComponent},
  {path: 'ar', component: ArComponent},
  {path: 'referencia', component: ReferenciaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
