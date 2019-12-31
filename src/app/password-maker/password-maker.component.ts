import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordMakerCore } from '../core/password-maker.core';
import { PasswordSaverService } from '../password-saver.service';

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
      number: ['3', [Validators.required, Validators.max(100), Validators.min(1)]]
    });

  constructor(private form: FormBuilder, private ps: PasswordSaverService) { }

  ngOnInit(): void {
  }

  generate(): void {
    this.ps.passwords.length = 0;

    const hasOmoji = this.setting.get('omoji').value === 'true' ? true : false;
    const hasKomoji = this.setting.get('komoji').value === 'true' ? true : false;
    const hasSuji = this.setting.get('suji').value === 'true' ? true : false;

    const charNumber = Number(this.setting.get('charNumber').value);
    const passNumber = Number(this.setting.get('number').value);
    const password = new PasswordMakerCore(hasOmoji, hasKomoji, hasSuji);
    for (const key of Array(passNumber)) {
      this.ps.passwords.push(password.Generate(charNumber));
    }
  }

  reset(): void {
    this.setting = this.form.group(
      {
        charNumber: ['8'],
        omoji: ['true'],
        komoji: ['true'],
        suji: ['true'],
        number: ['3', [Validators.required, Validators.max(100), Validators.min(1)]]
      });
  }

}
