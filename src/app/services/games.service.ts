import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { iGames } from '../interface/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: AngularFirestoreCollection<iGames>;

  constructor(private afs:AngularFirestore) {
    this.games = afs.collection<iGames>("games");
   }

  public getGames() {
    return this.games.snapshotChanges();
    //return this.afs.collection("games").snapshotChanges();
  }

}
