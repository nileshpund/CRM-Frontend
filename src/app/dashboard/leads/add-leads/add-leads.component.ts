import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.scss'],
})
export class AddLeadsComponent  implements OnInit {

  propertyForm!: FormGroup;
  
constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      firstVisit: ['', Validators.required],  // "Site Visit", "Revisit"
      siteVisitDate: ['', Validators.required],
      contactName: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],  // Assuming 10-digit phone
      email: ['', [Validators.required, Validators.email]],
      nationality: ['', Validators.required],
      ageGroup: ['', Validators.required],
      ethnicity: [''],
      employmentType: [''],
      companyName: [''],
      officeLocality: [''],
      pincode: ['', Validators.pattern(/^[0-9]{6}$/)],  // Assuming 6-digit Indian pincode
      industry: [''],
      address1: [''],
      locality: [''],
      unitType: ['', Validators.required],
      budget: ['', Validators.required],
      areaSqFeet: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      constructionStatus: ['', Validators.required],
      seekingFor: ['', Validators.required]
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.propertyForm.valid) {
      console.log('Form Data:', this.propertyForm.value);
      // perform submission
    } else {
      console.log('Form is invalid');
    }
  }

}
