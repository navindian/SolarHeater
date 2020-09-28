import { Component, OnInit } from '@angular/core';
import { SolarHeater } from '../shared/SolarHeater';
import { SolarAllocateListService } from './solar-allocate-list.service';

@Component({
  selector: 'app-solar-allocation-list',
  templateUrl: './solar-allocation-list.component.html',
  styleUrls: ['./solar-allocation-list.component.css']
})
export class SolarAllocationListComponent implements OnInit {

  constructor(private service:SolarAllocateListService) { }
  solarHeaterIds: number[]=[];
  selectedSolar: SolarHeater;
  selectedId:number;
  errorMessage:string;
  solarHeaterArray=[
    {
      'solarHeaterId':2001,
      'customerId':1001,
      'distributorName':'infy',
      'installationDate':new Date('2018-06-16'),
      'purchaseDate':new Date('2018-06-14')
    },
    {
      'solarHeaterId':2002,
      'customerId':1002,
      'distributorName':'infosys',
      'installationDate':new Date('2018-06-16'),
      'purchaseDate':new Date('2018-06-14')
    },
    {
      'solarHeaterId':2003,
      'customerId':1003,
      'distributorName':'mys',
      'installationDate':new Date('2018-06-16'),
      'purchaseDate':new Date('2018-06-14')
    },
    {
      'solarHeaterId':2004,
      'customerId':1004,
      'distributorName':'latex',
      'installationDate':new Date('2018-06-16'),
      'purchaseDate':new Date('2018-06-14')
    },
    {
      'solarHeaterId':2005,
      'customerId':1005,
      'distributorName':'trace',
      'installationDate':new Date('2018-06-16'),
      'purchaseDate':new Date('2018-06-14')
    }
  ]

  ngOnInit(): void {
    this.getAllId();
  }

  displaySelected() {
    this.getSolarHeaterbyId(this.selectedId);
  }

  getAllId() {
    this.service.getAllocation().subscribe(
      (response)=>this.solarHeaterIds=response,
      (error)=>this.errorMessage="Cannot get solarHeaterIds."
    )
  }

  getSolarHeaterbyId(id) {
    for (let i in this.solarHeaterArray) {
      let sol=this.solarHeaterArray[i];
      if(sol.solarHeaterId==id){
        this.selectedSolar=sol;
        break;
      }
    }
  }

}
