export class Contact {
  constructor(public id: number,
              public first_name: string,
              public last_name: string,
              public organization: string,
              public email: string,
              public phone: string,
              public website: string,
              public street_address: string,
              public city: string,
              public state: string,
              public zip: string,
              public notes: string){}
}
