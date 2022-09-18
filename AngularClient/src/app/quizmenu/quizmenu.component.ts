import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';


@Component({
  selector: 'app-quizmenu',
  templateUrl: './quizmenu.component.html',
  styleUrls: ['./quizmenu.component.css']
})
export class QuizmenuComponent implements OnInit {
  isCollapsed: boolean = false;
  isUserAuthenticated: boolean;

  currentIndex: number = 0;

  score: number = 0;
  answers: string;
  correct_answer: string;
  quizOver: boolean;
  
  constructor(private authService: AuthenticationService) { }

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
  }

  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers.user_answer;
    this.correct_answer = receivedAnswers.correct_answer
    this.goNext();
  }

  updateScore(){
     if (this.answers === this.correct_answer) {
       this.score++;
     }
  }

}
