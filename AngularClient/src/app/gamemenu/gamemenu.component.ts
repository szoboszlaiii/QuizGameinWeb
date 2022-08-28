import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';

@Component({
  selector: 'app-gamemenu',
  templateUrl: './gamemenu.component.html',
  styleUrls: ['./gamemenu.component.css']
})
export class GameMenuComponent implements OnInit {
  isCollapsed: boolean = false;
  isUserAuthenticated: boolean;
  
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    console.log("VALAMI", localStorage.getItem("currentUser"));
  }

  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
