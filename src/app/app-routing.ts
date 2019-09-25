import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GamesComponent } from './games/games.component';

const route: Routes = [
     { path: '', component: SignupComponent },
     { path: 'signin', component: SigninComponent },
     { path: 'games', component: GamesComponent},
     { path: '*', redirectTo: '' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(route,{enableTracing:false})
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouting {
}
