import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { AddProductComponent } from './add-product/add-product.component';

export const ROUTES = {
      path: 'Addproduct',
      component: AddProductComponent,
      canActivate: [AuthGuard] 
  };
