import { ErrorHandlerService } from './shared/services/error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { GameMenuComponent } from './gamemenu/gamemenu.component';
import { PlayerInfoComponent } from './playerinfo/playerinfo.component';
import { QuizmenuComponent } from './quizmenu/quizmenu.component';
import { QuestionMenuComponent } from './questionmenu/question.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    GameMenuComponent,
    PlayerInfoComponent,
    QuizmenuComponent,
    QuestionMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }