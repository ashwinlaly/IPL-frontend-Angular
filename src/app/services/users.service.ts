import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Users } from '../models/users';
import { ErrorService } from '../services/error.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: Observable<firebase.User>;

  //private firestore:AngularFirestore,
   constructor( private firebaseAuth: AngularFireAuth,private route: Router, private ems:ErrorService ) { 
     this.user = this.firebaseAuth.authState;
   }

  signup(user:Users){
      this.firebaseAuth.auth
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(val =>{
          console.log(val);
          console.log(val.additionalUserInfo.isNewUser);
          if(val.additionalUserInfo.isNewUser){
            this.route.navigate(['/games']);
          }
        })
        .catch(err=>{
          this.ems.logError(err.message);
        });
  }

  login(user:Users){
    
  }
  // getUsers(){
  //   return this.firestore.collection('users').snapshotChanges();
  // }

  // createUsers(User: Users){
  //   return this.firestore.collection('users').add(User);
  // }
  
}
