import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent  implements OnInit {
propertyForm: FormGroup;
  flatTypes = ['1BHK', '2BHK', '3BHK', 'Studio'];
  furnishedTypes = ['Furnished', 'Semi-Furnished', 'Unfurnished'];
  previewImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      flatType: ['', Validators.required],
      furnishedType: ['', Validators.required],
      location: ['', Validators.required],
      priceRange: ['', Validators.required],
      status: ['', Validators.required],
      flatImage: [null],
    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.propertyForm.patchValue({ flatImage: file });
      this.propertyForm.get('flatImage')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm() {
    if (this.propertyForm.valid) {
      console.log('Form data:', this.propertyForm.value);
      // do your submit logic
    }
  }
  ngOnInit() {}

}
