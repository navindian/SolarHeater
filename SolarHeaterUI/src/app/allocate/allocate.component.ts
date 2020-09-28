import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolarHeater } from '../shared/SolarHeater'

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {
  allocateForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  sample: SolarHeater = new SolarHeater('infy',new Date('2018-06-14'),new Date('2018-06-16'),1004,2012);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.allocateForm=this.fb.group({
      distributorName:['',[Validators.required]],
      purchaseDate:['',[Validators.required]],
      installationDate:['',[Validators.required]],
      customerId:['',[Validators.required]],
    })
  }

  register() {
    this.errorMessage=null;
    this.successMessage=null;
    let instDate=false;
    let purchDate=false;
    if(new Date(this.allocateForm.get('purchaseDate').value).getFullYear()===this.sample.purchaseDate.getFullYear() &&
    new Date(this.allocateForm.get('purchaseDate').value).getDay()===this.sample.purchaseDate.getDay() &&
    new Date(this.allocateForm.get('purchaseDate').value).getDate()===this.sample.purchaseDate.getDate()){
      instDate=true;
    }
    if(new Date(this.allocateForm.get('installationDate').value).getFullYear()===this.sample.installationDate.getFullYear() &&
    new Date(this.allocateForm.get('installationDate').value).getDay()===this.sample.installationDate.getDay() &&
    new Date(this.allocateForm.get('installationDate').value).getDate()===this.sample.installationDate.getDate()){
      purchDate=true;
    }
    if(this.allocateForm.get('distributorName').value===this.sample.distributorName && instDate && purchDate &&
    this.allocateForm.get('customerId').value===this.sample.customerId){
      this.successMessage="Solar Heater "+this.sample.solarHeaterId+" successfully allocated to customer "+this.sample.customerId;
    }
    else{
      this.errorMessage="The given Customer ID is not available";
    }
  }

}
