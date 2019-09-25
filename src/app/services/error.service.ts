import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private snackBar: MatSnackBar) { }

  logError(message:string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

}
