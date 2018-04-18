import { Contact } from '../contacts/contact.model'

export class Organization {
  constructor(public id: number,

              public contacts: Contact[],


              public email: string,
              public website: string,
              public phone: string,
              public newsletter: string,
              public vendor: boolean,
              public street_address: string,
              public city: string,
              public state: string,
              public zip: string,
              public description: string
            ){}
}
