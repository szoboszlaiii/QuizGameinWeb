import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';
import { RepositoryService } from '../shared/services/repository.service';
import { Questions } from '../_interfaces/questions/question';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gamemenu',
  templateUrl: './gamemenu.component.html',
  styleUrls: ['./gamemenu.component.css']
})
export class GameMenuComponent implements OnInit {
  isCollapsed: boolean = false;
  isUserAuthenticated: boolean;
  
  constructor(private authService: AuthenticationService
              ,private router: Router) { }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
