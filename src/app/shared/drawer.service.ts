import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
//make sure you inject the contact service

@Injectable()
export class DrawerService {
  formToDisplayOnDrawer = new Subject<string>();
  constructor() {}
}
