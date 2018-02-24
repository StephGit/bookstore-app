import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
} from '@nebular/theme';

import {
  FooterComponent,
  HeaderComponent,
  ShoppingCartAddButtonComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
import {
  SampleLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import {ToasterModule} from 'angular2-toaster';
import {CreditcardYearDirective} from './directives/creditcard-year.directive';
import {AdDirective} from './directives/ad.directive';
import {ProvideParentFormDirective} from './directives/provide-parent-form.directive';
import {BookListComponent} from './components/book-list-item/book-list.component';
import {ChangeAddressDataComponent} from './components/change-address-data/change-address-data.component';
import {ChangePaymentDataComponent} from './components/change-payment-data/change-payment-data.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {ChangeUserDataComponent} from './components/change-user-data/change-user-data.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, ToasterModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NgbModule,
];

const COMPONENTS = [
  HeaderComponent,
  ShoppingCartAddButtonComponent,
  BookListComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  SampleLayoutComponent,
  ChangeUserDataComponent,
  ChangeAddressDataComponent,
  ChangePaymentDataComponent,
  ChangePasswordComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

const DIRECTIVES = [
  AdDirective,
  CreditcardYearDirective,
  ProvideParentFormDirective,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'cosmic',
    },
    [ DEFAULT_THEME, COSMIC_THEME ],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
