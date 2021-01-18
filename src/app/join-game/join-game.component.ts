import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { LOADIPHLPAPI } from 'dns';
import { ResponseDTO } from '../responseDTO';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  joinForm: FormGroup;

  loading = false;
  submit = false;

  constructor(
    public dialogRef: MatDialogRef<JoinGameComponent>,
    private fb: FormBuilder,
    private http: HttpClient) {
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
  x = 0;
  async submitHandler() {
    this.loading = true;
    this.x++;
    const formValue = this.joinForm.value;
    console.log(JSON.stringify(formValue))
    try {
      await this.http.post<ResponseDTO>(`http://localhost:8089/join`, JSON.stringify(formValue)).subscribe(console.log, console.log);
      this.submit = true;
      localStorage.setItem('joined', 'true');
      localStorage.setItem('player', this.joinForm.value.name);
      this.dialogRef.close();
    } catch (err) {

    }
  }

}
