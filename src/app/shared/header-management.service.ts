import { Subject } from 'rxjs/Subject';

export class HeaderManagementService {
  pageTitle = new Subject<string>();
  constructor(){}
}
