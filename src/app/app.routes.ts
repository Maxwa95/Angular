import { Routes, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

import { AddProductComponent } from './add-product/add-product.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';

export const route = {
      path: 'Addproduct',
      component: AddProductComponent,
      canActivate: [AuthGuard] 
  };
