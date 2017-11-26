import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  contactFormSubmit() {}
}
