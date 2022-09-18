import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { EnvironmentUrlService } from './environment-url.service';
import { Questions } from 'src/app/_interfaces/questions/question';
import { Observable } from 'rxjs';
import { PlayerInfo } from 'src/app/_interfaces/playerinfo/playerinfo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  questiontUrl = this.envUrl.urlAddress + '/api/questions/getquestions';
  infoUrl = this.envUrl.urlAddress + '/api/playerinfo/getplayerinfo';

  public GetQuestions(): Promise<Questions> {
    return this.http.get<Questions>(this.questiontUrl, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}).toPromise();
    
  }

  public GetPlayerInfo(): Promise<PlayerInfo>{
    return this.http.get<PlayerInfo>(this.infoUrl, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}).toPromise();

  }
}