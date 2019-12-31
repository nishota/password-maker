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

}
