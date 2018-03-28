import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';


@Component({
  selector: 'app-contact-form-new',
  templateUrl: './contact-form-new.component.html',
  styleUrls: ['./contact-form-new.component.css']
})
export class ContactFormNewComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.contactService.addContact(form.value as Contact).subscribe();
  }

}
