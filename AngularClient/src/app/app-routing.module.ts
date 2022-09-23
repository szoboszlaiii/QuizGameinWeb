import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { GameMenuComponent } from './gamemenu/gamemenu.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerInfoComponent } from './playerinfo/playerinfo.component';
import { QuizmenuComponent } from './quizmenu/quizmenu.component';
import { RankListComponent } from './ranklist/ranklist.component';

const routes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    { path: 'gamemenu', component: GameMenuComponent },
    { path: 'playerinfo', component: PlayerInfoComponent },
    { path: 'ranklist', component: RankListComponent },
    { path: 'quizmenu', component: QuizmenuComponent },
    { path: '404', component : NotFoundComponent},
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
