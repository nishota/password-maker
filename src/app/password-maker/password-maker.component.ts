import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { PasswordMakerCore } from '../core/password-maker.core';
import { PasswordSaverService } from '../password-saver.service';

@Component({
  selector: 'app-password-maker',
  templateUrl: './password-maker.component.html',
  styleUrls: ['./password-maker.component.scss']
})
export class PasswordMakerComponent implements OnInit {
  // 初期オプション
  // 初期値をtrueにしたい場合、配列に追加する
  private charTypeArr = ['omoji', 'komoji', 'suji', ''];
  private optionArr = ['', ''];
  setting: FormGroup;
  buttonDisabled = false;

  constructor(private form: FormBuilder, private ps: PasswordSaverService) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.setting = this.form.group(
      {
        charNumber: ['8'],
        charType: this.form.array([]),
        optionType: this.form.array([]),
        number: ['6', [Validators.required, Validators.pattern('[0-9]*'), Validators.max(100), Validators.min(1)]]
      });
    const formType1 = this.setting.controls.charType as FormArray;
    const formType2 = this.setting.controls.optionType as FormArray;
    this.charTypeArr.forEach(x => formType1.push(new FormControl(x)));
    this.optionArr.forEach(x => formType2.push(new FormControl(x)));
  }

  generate(): void {
    this.ps.passwords.length = 0;
    const array = this.setting.get('charType').value;
    const hasOmoji = array.includes('omoji') ? true : false;
    const hasKomoji = array.includes('komoji') ? true : false;
    const hasSuji = array.includes('suji') ? true : false;
    const hasKigo = array.includes('kigo') ? true : false;
    const optionArr = this.setting.get('optionType').value;
    const hasSameChar = !optionArr.includes('option1') ? true : false;
    const hasDuplication = !optionArr.includes('option2') ? true : false;

    const charNumber = Number(this.setting.get('charNumber').value);
    const passNumber = Number(this.setting.get('number').value);
    const password = new PasswordMakerCore(hasOmoji, hasKomoji, hasSuji, hasKigo, hasSameChar);
    for (const _ of Array(passNumber)) {
      this.ps.passwords.push(password.Generate(charNumber, hasDuplication));
    }
  }

  reset(): void {
    // this.init();
    window.location.reload();
  }

  checkType(charType: string, isChecked: boolean) {
    const formType = this.setting.controls.charType as FormArray;
    this.check(charType, isChecked, formType);
    this.buttonDisabled = formType.controls.length === 0;
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
      formType.removeAt(index); // kigoだけここでなぜかremoveできてない
    }
  }
}
