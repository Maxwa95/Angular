import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
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
import { SellerComponent } from './seller/seller.component';
import { EditProductComponent } from './edit-product/edit-product.component';
<<<<<<< HEAD
import { CookieService } from 'ngx-cookie-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NouisliderModule } from 'ng2-nouislider';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
=======
import{AddressesComponent} from'./addresses/addresses.component'
import { CookieService } from 'ngx-cookie-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NouisliderModule } from 'ng2-nouislider';
import { GenerateProductComponent } from './generate-product/generate-product.component';


>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6

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
  { path:"aboutUs",component: AboutUsComponent},
  { path:"profile",component: ProfileComponent},
  { path:"shop",component: ShopComponent},
  { path:"userprofile",component: ProfileComponent},
<<<<<<< HEAD
=======
  { path:"search/:name",component: SearchResultComponent},
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
  { path:"cart",component: CartComponent},
  { path:"Seller",component: SellerComponent},
  { path:"EditProduct",component: EditProductComponent},
  { path:"single/:id",component: SingleProductComponent},
  { path:"userprofile",component: ProfileComponent},
  { path:"aboutUs",component: AboutUsComponent},
  { path:"profile",component: ProfileComponent},
  { path:"search/:name",component: SparePartsComponent},
  { path:"cart",component: CartComponent},
  { path:"shop",component: ShopComponent},
<<<<<<< HEAD
  { path:"single-shop",component: SingleShopComponent},
=======
  { path:"addresses",component: AddressesComponent},
  { path:"single-shop",component: SingleShopComponent},
  { path:"GenerateProduct",component: GenerateProductComponent}
  
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
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
    SellerComponent,
    EditProductComponent,
    SearchResultComponent,
<<<<<<< HEAD
=======
    AddressesComponent,
    GenerateProductComponent

>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpModule,
=======
    HttpModule, 
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule,
<<<<<<< HEAD
    NouisliderModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circle,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#007bff', 
      secondaryColour: '#0fe459', 
      tertiaryColour: '#333333'
  })
=======
    NouisliderModule
>>>>>>> b6ec603b2744e9eec2341ea6ae524c1bf58c29e6
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 