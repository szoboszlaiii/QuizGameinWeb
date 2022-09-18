import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quizmenu',
  templateUrl: './quizmenu.component.html',
  styleUrls: ['./quizmenu.component.css']
})
export class QuizmenuComponent implements OnInit {
  isCollapsed: boolean = false;
  isUserAuthenticated: boolean;

  currentIndex: number;
  score: number = 0;
  answers: string;
  correct_answer: string;
  quizOver: boolean = false;
  timer: Observable<string>;
  
  constructor(private authService: AuthenticationService, private router: Router) { }

 async ngOnInit() {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  goNext() {
    this.updateScore();
    if (this.currentIndex === 10){
      this.endQuiz();
    }
  }

  endQuiz(){
    this.quizOver = true;
    alert('Quiznek vége! pontok: ' + this.score + '/ ' + 10);
    this.MainMenu();
  }

  MainMenu(){
     this.timer = new Observable(observer => {
        setTimeout(() => {observer.next('5');}, 5000);
     })

     this.timer.subscribe(() => { this.router.navigate(['gamemenu']) });

  }

  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers.user_answer;
    this.correct_answer = receivedAnswers.correct_answer;
    this.currentIndex = receivedAnswers.index;
    this.goNext();
  }

  updateScore(){
     if (this.answers === this.correct_answer) {
       this.score++;
     }
  }

}
