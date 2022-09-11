import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { EnvironmentUrlService } from './environment-url.service';
import { Questions } from 'src/app/_interfaces/questions/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  requestUrl = this.envUrl.urlAddress + '/api/questions/getquestions';

  public GetQuestions() {
    return this.http.get<Questions>(this.requestUrl, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}});
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

}