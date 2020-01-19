import { Component, OnInit } from '@angular/core';
import { PasswordSaverService } from '../password-saver.service';

@Component({
  selector: 'app-password-place',
  templateUrl: './password-place.component.html',
  styleUrls: ['./password-place.component.scss']
})
export class PasswordPlaceComponent implements OnInit {
  passwords: string[];
  selectedPassword: string;
  template = ['先程、お送りした資料に設定したパスワードです。'];
  constructor(private ps: PasswordSaverService) {
    this.passwords = this.ps.passwords;
  }

  ngOnInit() {
  }

  public get disabled(): boolean {
    return this.passwords.length === 0;
  }

  select(target: any): void {
    target.select();
    document.execCommand('copy');
    this.selectedPassword = this.template[0] + '\r\nパスワード: ' + target.value;
  }

  selectTemplate(target: any): void {
    target.select();
    document.execCommand('copy');
  }

  download(target: any): void {
    const pass = this.passwords.join('\r');
    target.href = URL.createObjectURL(
      new Blob([pass], {
        type: 'text/plain'
      }));
  }
}
