import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../shared/http.service';
import { Contact } from '../contact.model';


@Component({
  selector: 'app-contact-form-new',
  templateUrl: './contact-form-new.component.html',
  styleUrls: ['./contact-form-new.component.css']
})
export class ContactFormNewComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.http.addContact(form.value as Contact).subscribe();
  }

}
