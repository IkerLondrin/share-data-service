import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './sections/componente-a/componente-a.component';
import { DesanidadosComponent } from './sections/desanidados/desanidados.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



const routes: Routes = [
  { path: '', component: ComponenteAComponent, data: { title: 'Home' } },
  { path: 'padreHijo', component: ComponenteAComponent, data: { title: 'Padre a Hijo' } },
  { path: 'hijoPadre', component: NotfoundComponent, data: { title: 'Hijo a Padre' } },
  { path: 'desanidados', component: DesanidadosComponent, data: { title: 'Desanidados' } },
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
