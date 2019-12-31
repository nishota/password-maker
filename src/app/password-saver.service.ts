import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordSaverService {
  passwords: string[] = [];
  constructor() { }
}
