import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccountRoutingModule, routedComponents} from './account-routing.module';
import {RouterModule} from '@angular/router';
import {ThemeModule} from '../../@theme/theme.module';
import { LogoutComponent } from './logout/logout.component';
import { ChangeUserDataComponent } from './change-user-data/change-user-data.component';
import { ChangeAddressDataComponent } from './change-address-data/change-address-data.component';
import { ChangePaymentDataComponent } from './change-payment-data/change-payment-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OverviewComponent } from './overview/overview.component';
import { EditAccountDataComponent } from './edit-account-data/edit-account-data.component';


@NgModule({
  imports: [
    AccountRoutingModule,
    RouterModule,
    ThemeModule,
  ],
  declarations: [
    ...routedComponents,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ChangeUserDataComponent,
    ChangeAddressDataComponent,
    ChangePaymentDataComponent,
    ChangePasswordComponent,
    OverviewComponent,
    EditAccountDataComponent,
  ],
  entryComponents: [
    ChangeUserDataComponent,
    ChangeAddressDataComponent,
    ChangePaymentDataComponent,
    ChangePasswordComponent,
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
  ],
})
export class AccountModule {
}
