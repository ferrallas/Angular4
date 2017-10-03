import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculadorasComponent } from './calculadoras/calculadoras.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MihuellaComponent } from './mihuella/mihuella.component';
import { MiaguaComponent } from './miagua/miagua.component';
import { MisgasesComponent } from './misgases/misgases.component';
import { AdminAguaComponent } from './admin.agua/admin.agua.component';
import { AdminGasesComponent } from './admin.gases/admin.gases.component';
import { AdminPaisesComponent } from './admin.paises/admin.paises.component';
import { AdminUsuariosComponent } from './admin.usuarios/admin.usuarios.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { AguaServiceService } from './agua-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculadorasComponent,
    AdministracionComponent,
    MihuellaComponent,
    MiaguaComponent,
    MisgasesComponent,
    AdminAguaComponent,
    AdminGasesComponent,
    AdminPaisesComponent,
    AdminUsuariosComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //PARA OBSERVABLE
    RouterModule.forRoot([
      { path: 'calculadoras', component: MihuellaComponent },
      { path: "mi-huella", component: MihuellaComponent },
      { path: "mi-agua", component: MiaguaComponent },
      { path: "mis-gases", component: MisgasesComponent },
      { path: "admin", component: AdministracionComponent },
      { path: "admin-agua", component: AdminAguaComponent },
      { path: "admin-gas", component: AdminGasesComponent },
      { path: "admin-paises", component: AdminPaisesComponent },
      { path: "admin-users", component: AdminUsuariosComponent },
      { path: "admin-users/:userId", component: EditUserComponent},
      { path: "**", redirectTo: "calculadoras" },
    ])
  ],
  providers: [AguaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
