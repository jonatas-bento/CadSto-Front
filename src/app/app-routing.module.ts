import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { DetalhamentoComponent } from './alunos/detalhamento/detalhamento.component';
import { EditComponent } from './alunos/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'alunos', component: AlunosComponent, pathMatch: 'full'},
  { path: 'detalhamento', component: DetalhamentoComponent, pathMatch: 'full'},
  { path: 'aluno/:id', component: EditComponent},
  { path: 'aluno', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
