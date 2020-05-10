import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './sections/componente-a/componente-a.component';
import { DesanidadosComponent } from './sections/desanidados/desanidados.component';

const routes: Routes = [
  { path: '', component: ComponenteAComponent, data: { title: 'Home' } },
  { path: 'padreHijo', component: ComponenteAComponent, data: { title: 'Padre a Hijo' } },
  { path: 'desanidados', component: DesanidadosComponent, data: { title: 'Desanidados' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
