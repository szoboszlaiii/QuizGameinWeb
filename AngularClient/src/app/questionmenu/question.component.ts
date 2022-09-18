import { Router } from '@angular/router';
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';
import { RepositoryService } from '../shared/services/repository.service';
import { Questions } from '../_interfaces/questions/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionMenuComponent implements OnInit, DoCheck {
  isCollapsed: boolean = false;
  isUserAuthenticated: boolean;

  question: Questions;
  @Input() questionIndex: number;
  @Input() score: number;
  @Output() answers = new EventEmitter<{user_answer: string, correct_answer: string}>();

  currentQuestion: string;
  currentOptions: string[];
  currentCorrectAnswer: string;
  userAnswer: string;
  
  constructor(private authService: AuthenticationService
              ,private questionService: RepositoryService) { }

 async ngOnInit() {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    this.question = await this.questionService.GetQuestions();

  }

  ngDoCheck(): void {
    this.currentQuestion = this.question[this.questionIndex].questions;
    this.currentOptions = [this.question[this.questionIndex].answer1, this.question[this.questionIndex].answer2, this.question[this.questionIndex].answer3, this.question[this.questionIndex].answer4];
    
  }

  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.currentCorrectAnswer = this.question[this.questionIndex].correct_Answer;
    this.answers.emit({user_answer: this.userAnswer, correct_answer: this.currentCorrectAnswer});
    this.questionIndex++;
  }

}
