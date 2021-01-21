import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import Game from '../state/game';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  joinForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<JoinGameComponent>,
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar) {
  }
  ngOnInit() {

    this.joinForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      first: [null, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]],
      second: [null, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]]
    });
  }

  get name() {
    return this.joinForm.get('name');
  }

  get first() {
    return this.joinForm.get('first');
  }

  get second() {
    return this.joinForm.get('second');
  }

  async submitHandler() {
    const formValue = this.joinForm.value;
    this.http.post(`http://localhost:8089/join`, JSON.stringify(formValue)).subscribe({
      next: () => {
        localStorage.setItem('player', this.joinForm.value.name);
        this.dialogRef.close();
        Game.PlayereJoinedEvent.complete();
      },
      error: (err: HttpErrorResponse) => {
        this.snackBar.open(err.error.detail, 'Error', {
          duration: 2000
        });
      }
    });
  }

}
