import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllocateComponent } from './allocate/allocate.component';
import { SolarAllocationListComponent } from './solar-allocation-list/solar-allocation-list.component';
import { SolarAllocateListService } from './solar-allocation-list/solar-allocate-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaysCountPipe } from './days-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllocateComponent,
    SolarAllocationListComponent,
    DaysCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SolarAllocateListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
