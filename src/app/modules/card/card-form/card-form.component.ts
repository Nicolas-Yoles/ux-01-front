import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cardCreationDTO } from '../models/cardCreationDTO';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input() model;

  @Output() onSubmit: EventEmitter<cardCreationDTO> =
    new EventEmitter<cardCreationDTO>();

  @Input()
  errors: string[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', { validators: [Validators.required] }],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSubmit.emit(this.form.value);
    // alert(this.form.value.title);
  }
}
