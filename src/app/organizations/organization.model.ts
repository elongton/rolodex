
export class Organization {
  constructor(public id: number,
              public name: string,
              public contacts: string,
              public newsletter: boolean,
              public website: string,
              public programs_hosted: number
            ){}
}
