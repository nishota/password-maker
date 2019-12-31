import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-maker',
  templateUrl: './password-maker.component.html',
  styleUrls: ['./password-maker.component.scss']
})
export class PasswordMakerComponent implements OnInit {
  setting = this.form.group(
    {
      charNumber: ['8'],
      omoji: ['true'],
      komoji: ['true'],
      suji: ['true'],
      number: ['4', [Validators.required, Validators.max(100), Validators.min(1)]]
    });

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
  }

  generate(): void {
  }

  reset(): void {
    this.setting = this.form.group(
      {
        charNumber: ['8'],
        omoji: ['true'],
        komoji: ['true'],
        suji: ['true'],
        number: ['4', [Validators.required, Validators.max(100), Validators.min(1)]]
      });
  }

}
