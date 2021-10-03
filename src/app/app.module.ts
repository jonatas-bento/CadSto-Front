import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularMaterialModule} from './angular.material.module';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AlunosComponent } from './alunos/alunos.component';
import { EditComponent } from './alunos/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhamentoComponent } from './alunos/detalhamento/detalhamento.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    AlunosComponent,
    DetalhamentoComponent,
    EditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: environment.root
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
