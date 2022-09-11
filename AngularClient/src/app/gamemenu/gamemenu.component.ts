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
  questions: Questions;
  
  constructor(private authService: AuthenticationService
              ,private router: Router
              ,private questionService: RepositoryService) { }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    this.getQuestions();
  }

  getQuestions = () => {
    this.questionService.GetQuestions()
    .subscribe({
      next: (res:Questions) => {
       this.questions = res;
       console.log(res);
    },
    error: (err: HttpErrorResponse) => {
      console.log(err.message);
    }})
  }

  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
