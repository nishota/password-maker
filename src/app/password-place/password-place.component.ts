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

  select(target: any) {
    target.select();
    document.execCommand('copy');
  }

  // TODO ファイルダウンロード
  download() {
  //   const content = this.passwords.join('\r\c');
  //   const blob = new Blob(this.passwords, { type: 'text/plain' });
  //   window.URL = window.URL;
  //   const link = $('<a></a>');
  //   link.attr('href', window.URL.createObjectURL(blob));
  //   link.attr('download', 'passoword.txt');
  //   console.log(link);
  //   link.trigger('click');
  }
}
