import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Router } from '@angular/router';
import { RepositoryService } from '../shared/services/repository.service';
import { PlayerInfo } from '../_interfaces/playerinfo/playerinfo';
import { HttpErrorResponse } from '@angular/common/http';


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
  playerInfo: PlayerInfo;

  
  constructor(private authService: AuthenticationService, private router: Router, private quizServ: RepositoryService) { }

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

  async MainMenu(){
    this.playerInfo = await this.quizServ.GetPlayerInfo()

    const player: PlayerInfo = {
      Id: this.playerInfo[0].id,
      FirstName: this.playerInfo[0].firstName,
      LastName: this.playerInfo[0].lastName,
      UserName: this.playerInfo[0].userName,
      Score: this.playerInfo[0].score + this.score,
      PlayedGames: this.playerInfo[0].playedGames + 1,
      S_G: (this.playerInfo[0].score + this.score)/(this.playerInfo[0].playedGames + 1),
    };

     this.timer = new Observable(observer => {
        setTimeout(() => {observer.next('5');}, 5000);
     })

     this.timer.subscribe(() => { 
      this.quizServ.UpdatePlayer(player).subscribe({
        next: () => this.router.navigate(['gamemenu']),
        error: (err: HttpErrorResponse) => console.log("ERROR: ", err)
      })
    });

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
