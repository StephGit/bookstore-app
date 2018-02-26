import { Component, Input, OnInit } from '@angular/core';

import {NbThemeService} from '@nebular/theme';
import {CatalogService} from '../../../@core/services/catalog.service';
import {User} from '../../../@core/model/user.model';
import {CurrentUserService} from '../../../@core/services/current-user.service';
import {Router} from '@angular/router';
import {NbUserMenuItem} from '@nebular/theme/components/user/user.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  picture = 'assets/images/user.png';

  items: NbUserMenuItem[]  = [
    { title: 'Account', link: '/account/overview'},
    { title: 'Logout', link: '/account/logout'}];

  constructor(private catalogService: CatalogService,
              private currentUserService: CurrentUserService,
              private router: Router,
              private themeService: NbThemeService) {
  }

  ngOnInit() {
    this.themeService.changeTheme('default');
    this.currentUserService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      });
  }

  goToHome() {
    this.router.navigate(['']);
  }

  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }

  navigateToLogin() {
    this.router.navigate(['/account/login']);
  }

  startSearch(keywords) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
    this.catalogService.searchBooks(keywords);
  }
}
