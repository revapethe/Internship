import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { OffshoreComponent } from './offshore/offshore.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { WebmailComponent } from './webmail/webmail.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'products',component:ProductsComponent},
  {path:'customers',component:CustomersComponent},
  {path:'offshore',component:OffshoreComponent},
  {path:'careers',component:CareersComponent},
  {path:'contact',component:ContactComponent},
  {path:'webmail',component:WebmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
