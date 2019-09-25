import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private games$: GamesService) { }

  ngOnInit() {
    this.games$.getGames().subscribe(res =>{
      console.log(res);
    })
  }

    
}
