import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1,
        first_name:'John',
        last_name:'Doe',
        organization:'Toys are Us',
        email:'johndoe@gmail.com',
        phone:'804-203-4828',
        website:'john.com',
        street_address: '9238 John Circle',
        city:'Richmond',
        state:'Virginia',
        zip:'32324',
        notes:'John is a good guy. He always uses nice language'
      },
      { id: 2,
        first_name:'Mary',
        last_name:'Jane',
        organization:'Blargin',
        email:'blargzor@gmail.com',
        phone:'804-223-4548',
        website:'john.com',
        street_address: '9238 John Circle',
        city:'Richmond',
        state:'Virginia',
        zip:'32324',
        notes:'John is a good guy. He always uses nice language'
      },
      { id: 3,
        first_name:'Laurel',
        last_name:'Smith',
        organization:'Laurax Studios',
        email:'laurel.smith@lauraxstudios.com',
        phone:'804-203-4828',
        website:'john.com',
        street_address: '9238 John Circle',
        city:'Richmond',
        state:'Virginia',
        zip:'32324',
        notes:'John is a good guy. He always uses nice language'
      }
    ];
    return {contacts};
  }
}
