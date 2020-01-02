import { Component, OnInit } from '@angular/core';
import { PasswordSaverService } from '../password-saver.service';

@Component({
  selector: 'app-password-place',
  templateUrl: './password-place.component.html',
  styleUrls: ['./password-place.component.scss']
})
export class PasswordPlaceComponent implements OnInit {
  passwords: string[];
  constructor(private ps: PasswordSaverService) {
    this.passwords = this.ps.passwords;
  }

  ngOnInit() {
  }

  public get disabled(): boolean {
    return this.passwords.length === 0;
  }

  select(target: any) {
    target.select();
    document.execCommand('copy');
  }

  // TODO ファイルダウンロード
  download(target: any) {
    const pass = this.passwords.join('\r');
    target.href = URL.createObjectURL(
      new Blob([pass], {
      type: 'text/plain'
    }));
  }
}
