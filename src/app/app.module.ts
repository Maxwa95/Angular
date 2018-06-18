import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes  } from '@angular/router';
import {CanActivate} from "@angular/router";
import { HttpClientModule,HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Step1Component } from './register/step1/step1.component';
import { SallerRigisterComponent } from './register/saller-rigister/saller-rigister.component';
import { ProfilShopComponent } from './profil-shop/profil-shop.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditAccount1Component } from './edit-account1/edit-account1.component';
import { EditAccount2Component } from './edit-account2/edit-account2.component';
import { EditAccount3Component } from './edit-account3/edit-account3.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SingleShopComponent } from './single-shop/single-shop.component';
import { AddProductComponent } from './add-product/add-product.component';
import{  AddressesComponent } from'./addresses/addresses.component'
import { CookieService } from 'ngx-cookie-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NouisliderModule } from 'ng2-nouislider';
import { GenerateProductComponent } from './generate-product/generate-product.component';
import { LoadingModule } from 'ngx-loading';
import { NeedProductComponent } from './need-product/need-product.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SellerService } from "./SellerService.service";
import { ClientService } from "./client-service.service";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdviceComponent } from './advice/advice.component';
import { WrongComponent } from './wrong/wrong.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { TheSellerComponent } from "./the-seller/the-seller.component";
import { AccountSettingComponent } from './the-seller/account-setting/account-setting.component';
import { CustomFormsModule } from 'ng4-validators';
import { OrdersComponent } from './the-seller/orders/orders.component';

const appRoutes = [
  { path: "", component: HomeComponent},
  { path: "register", component: RegisterComponent},
  { path: "SpareParts", component: SparePartsComponent},
  { path: "login", component: LoginComponent},
  { path: "edit-account1", component: EditAccount1Component},
  { path: "edit-account2", component: EditAccount2Component},
  { path: "edit-account3", component: EditAccount3Component},
  { path: "step1", component: Step1Component},
  { path: "login", component: LoginComponent},
  { path: "seller", component: SallerRigisterComponent},
  { path: "spareparts", component: SparePartsComponent},
  { path:"profil-shop",component: ProfilShopComponent},
  { path:"single",component: SingleProductComponent},
  { path:"userprofile",component: ProfileComponent},
  { path:"profile",component: ProfileComponent},
  { path:"shop",component: ShopComponent},
  { path:"userprofile",component: ProfileComponent},
  { path:"search/:name",component: SparePartsComponent},
  { path:"cart",component: CartComponent},
  // canActivate: [ClientService] },
 

  {
    path: 'Addproduct',
    component: AddProductComponent,
    canActivate: [SellerService] 
},
  { path:"single/:id",component: SingleProductComponent},
  { path:"search/:name",component: SparePartsComponent},
  { path:"addresses",component: AddressesComponent},
  { path:"single-shop",component: SingleShopComponent},
  { path:"generateproduct",component: GenerateProductComponent,
  canActivate: [SellerService] 
},
  { path:"needproduct",component: NeedProductComponent},
  { path:"generateproduct/:id",component: GenerateProductComponent},
  { path:"need-product",component: NeedProductComponent},
  { path:"generateproduct",component: GenerateProductComponent},
  { path:"contact-us",component: ContactUsComponent},
  { path:"advice",component: AdviceComponent},
  { path:"wrong",component: WrongComponent},
  { path:"editProduct/:id",component: EditProductComponent,
  canActivate: [SellerService]},

  { path:"sellerPage",component: TheSellerComponent},
  {path: "account", component: AccountSettingComponent},
  {path: "order", component: OrdersComponent}
  
/*  ,
  canActivate: [SellerService]*/

  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    Step1Component,
    SallerRigisterComponent,
    SparePartsComponent,
    ProfilShopComponent,
    EditAccount1Component,
    EditAccount2Component,
    EditAccount3Component,
    CartComponent,
    SingleProductComponent,
    ProfileComponent,
    AboutUsComponent,
    ShopComponent,
    SearchResultComponent,
    SingleShopComponent,
    AddProductComponent,
    SearchResultComponent,
    AddressesComponent,
    GenerateProductComponent,
    NeedProductComponent,
    ContactUsComponent,
    AdviceComponent,
    WrongComponent,
    EditProductComponent,
    TheSellerComponent,
    AccountSettingComponent,
    OrdersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Ng2SearchPipeModule,
    NouisliderModule,
    LoadingModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [CookieService,SellerService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 