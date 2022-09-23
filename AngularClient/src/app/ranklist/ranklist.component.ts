import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';
import { RepositoryService } from '../shared/services/repository.service';
import { Questions } from '../_interfaces/questions/question';
import { HttpErrorResponse } from '@angular/common/http';
import { PlayerInfo } from '../_interfaces/playerinfo/playerinfo';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ranklist',
  templateUrl: './ranklist.component.html',
  styleUrls: ['./ranklist.component.css']
})
export class RankListComponent implements OnInit {
  isUserAuthenticated: boolean;
  playerInfo: PlayerInfo[];
  
  columnDefs: any;

  createColDef(): void
  {
    this.columnDefs = [
      {
          headerName: "Név",
          field: "userName",
          sortable: true,
          filter: true,
          editable: false,
          resizable: true,
          width: 200,         
      },
      {
          headerName: "Pont",
          field: "score",
          sortable: true,
          filter: true,
          editable: false,
          resizable: true,
          width: 100,
      },
      {
        headerName: "Játszott játékok",
        field: "playedGames",
        sortable: true,
        filter: true,
        editable: false,
        resizable: true,
        width: 150,
    },
    {
        headerName: "Pont/Játék",
        field: "s_G",
        sortable: true,
        filter: true,
        editable: false,
        resizable: true,
        width: 150,
    },

    ];
}
  
  constructor(private authService: AuthenticationService, private infoService: RepositoryService, private router: Router) { }

  async ngOnInit() {
    this.createColDef();
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    this.playerInfo = await this.infoService.GetAllPlayerInfo();
    console.log(this.playerInfo);
    
  }

  backToMainMenu(){
    this.router.navigate(['gamemenu']);
  }

}
