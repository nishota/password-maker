import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
      charType: this.form.array([]),
      number: ['3', [Validators.required, Validators.max(100), Validators.min(1)]]
    });

  constructor(private form: FormBuilder, private ps: PasswordSaverService) { }

  ngOnInit(): void {
  }

  generate(): void {
    this.ps.passwords.length = 0;

    const array = this.setting.get('charType').value;
    let hasOmoji = false;
    let hasKomoji = false;
    let hasSuji = false;
    if (array.includes('omoji')) {
      hasOmoji = true;
    }
    if (array.includes('komoji')) {
      hasKomoji = true;
    }
    if (array.includes('suji')) {
      hasSuji = true;
    }

    const charNumber = Number(this.setting.get('charNumber').value);
    const passNumber = Number(this.setting.get('number').value);
    const password = new PasswordMakerCore(hasOmoji, hasKomoji, hasSuji);
    for (const _ of Array(passNumber)) {
      this.ps.passwords.push(password.Generate(charNumber));
    }
  }

  reset(): void {
    this.setting = this.form.group(
      {
        charNumber: ['8'],
        charType: this.form.array([]),
        number: ['3', [Validators.required, Validators.max(100), Validators.min(1)]]
      });
  }

  onChange(charType: string, isChecked: boolean) {
    const formType = this.setting.controls.charType as FormArray;
    if (isChecked) {
      formType.push(new FormControl(charType));
    } else {
      const index = formType.controls.findIndex(x => x.value === charType);
      formType.removeAt(index);
    }
  }
}
