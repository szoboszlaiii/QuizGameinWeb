import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';
import { RepositoryService } from '../shared/services/repository.service';
import { Questions } from '../_interfaces/questions/question';
import { HttpErrorResponse } from '@angular/common/http';
import { PlayerInfo } from '../_interfaces/playerinfo/playerinfo';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerInfoComponent implements OnInit {
  isUserAuthenticated: boolean;
  playerInfo: PlayerInfo;

  public Name: string;
  
  
  constructor(private authService: AuthenticationService, private infoService: RepositoryService) { }

  async ngOnInit() {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    this.playerInfo = await this.infoService.GetPlayerInfo()
    this.Name = this.playerInfo[0].firstName + " " + this.playerInfo[0].lastName;
    
  }

}
