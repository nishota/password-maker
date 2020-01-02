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
  charTypeArr = ['omoji', 'komoji', 'suji'];
  optionArr = ['option1'];

  setting = this.form.group(
    {
      charNumber: ['8'],
      charType: this.form.array([]),
      optionType: this.form.array([]),
      number: ['3', [Validators.required, Validators.max(100), Validators.min(1)]]
    });

  constructor(private form: FormBuilder, private ps: PasswordSaverService) { }

  ngOnInit(): void {
    const formType1 = this.setting.controls.charType as FormArray;
    const formType2 = this.setting.controls.optionType as FormArray;
    this.charTypeArr.forEach(x => formType1.push(new FormControl(x)));
    this.charTypeArr.forEach(x => formType2.push(new FormControl(x)));
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
    const optionArr = this.setting.get('optionType').value;
    let hasSameChar = true;
    if (optionArr.includes('option1')) {
      hasSameChar = false;
    }

    const charNumber = Number(this.setting.get('charNumber').value);
    const passNumber = Number(this.setting.get('number').value);
    const password = new PasswordMakerCore(hasOmoji, hasKomoji, hasSuji, hasSameChar);
    for (const _ of Array(passNumber)) {
      this.ps.passwords.push(password.Generate(charNumber));
    }
  }

  reset(): void {
    this.setting = this.form.group(
      {
        charNumber: ['8'],
        charType: this.form.array([]),
        optionType: this.form.array([]),
        number: ['3', [Validators.required, Validators.max(100), Validators.min(1)]]
      });
  }

  checkType(charType: string, isChecked: boolean) {
    const formType = this.setting.controls.charType as FormArray;
    this.check(charType, isChecked, formType);
  }
  checkOption(optionType: string, isChecked: boolean) {
    const formType = this.setting.controls.optionType as FormArray;
    this.check(optionType, isChecked, formType);
  }

  check(type: string, isChecked: boolean, formType: FormArray) {
    if (isChecked) {
      formType.push(new FormControl(type));
    } else {
      const index = formType.controls.findIndex(x => x.value === type);
      formType.removeAt(index);
    }
  }
}
