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
  getinfoUrl = this.envUrl.urlAddress + '/api/playerinfo/getplayerinfo';
  getallinfoUrl = this.envUrl.urlAddress + '/api/playerinfo/getallplayerinfo';
  createinfoUrl = this.envUrl.urlAddress + '/api/playerinfo/createplayerinfo';
  updateinfoUrl = this.envUrl.urlAddress + '/api/playerinfo/updateplayerinfo';

  public GetQuestions(): Promise<Questions> {
    return this.http.get<Questions>(this.questiontUrl, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}).toPromise();
  }

  public GetPlayerInfo(): Promise<PlayerInfo>{
    return this.http.get<PlayerInfo>(this.getinfoUrl, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}).toPromise();
  }

  public GetAllPlayerInfo(): Promise<PlayerInfo[]>{
    return this.http.get<PlayerInfo[]>(this.getallinfoUrl, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}).toPromise();
  }

  public CreatePlayer(body: PlayerInfo): Observable<PlayerInfo>{
    return this.http.post<PlayerInfo>(this.createinfoUrl, body);
  }

  public UpdatePlayer(body: PlayerInfo): Observable<PlayerInfo>{
    return this.http.post<PlayerInfo>(this.updateinfoUrl, body);
  }
}