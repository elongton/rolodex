import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1,
        first_name:'John',
        last_name:'Doe',
        organization:'Toys are Us',
        email:'johndoe@gmail.com',
        phone:'804-203-4828'
      },
      { id: 2,
        first_name:'Mary',
        last_name:'Jane',
        organization:'Blargin',
        email:'blargzor@gmail.com',
        phone:'804-223-4548'
      },
      { id: 3,
        first_name:'Laurel',
        last_name:'Smith',
        organization:'Laurax Studios',
        email:'laurel.smith@lauraxstudios.com',
        phone:'804-203-4828'
      },
      { id: 4,
        first_name:'Johnny',
        last_name:'English',
        organization:'MI7',
        email:'johnny@mi7.org',
        phone:'804-232-9847'
      },
      { id: 5,
        first_name:'Rick',
        last_name:'Tinner',
        organization:'Rin Tin Tin',
        email:'tinnerbach@gmail.com',
        phone:'202-494-0494'
      }
    ];
    const organizations = [
        {id: 1,
         name: 'Demco',
         contacts: ['Bob', 'Sally', 'Cheryl', 'David'],
         website: 'demcosoftware.com',
         programs_hosted: 5,
         newsletter: true,
        },
        {id: 2,
         name: 'Richmond City',
         contacts: ['John', 'Jordan'],
         website: 'richmond.com',
         programs_hosted: 3,
         newsletter: false,
        },
        {id: 3,
         name: 'Springshare',
         contacts: ['Rick', 'Billy'],
         website: 'springy.com',
         programs_hosted: 5,
         newsletter: false,
        },
        {id: 4,
         name: 'Toys for Tots',
         contacts: ['Bob', 'Lon'],
         website: 'tot.com',
         programs_hosted: 1,
         newsletter: false,
        },
        {id: 5,
         name: 'Babies',
         contacts: ['Tim', 'Sally'],
         website: 'babies.com',
         programs_hosted: 2,
         newsletter: false,
        }
    ]
    const programs = [
        {id: 1,
         name: 'Fun at the Park',
         date: '04-15-2018',
         time: '12:00PM - 2:00PM',
         organization: 'Ginter Park',
         primary_contacts: 'Kerry Phillips',
         latest_rating: '4/5',
         average_rating: '4.8/5'
        },
        {id: 2,
         name: 'Teaching Computers',
         date: '04-10-2018',
         time: '9:00AM - 2:00PM',
         organization: 'West End',
         primary_contacts: 'Lisa Coleman',
         latest_rating: '2/5',
         average_rating: '2/5'
        }
    ]
    return {contacts, organizations, programs};
  }
}
