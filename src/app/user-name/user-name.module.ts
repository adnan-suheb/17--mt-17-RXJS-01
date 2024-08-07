import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { Consumer1Component } from './consumer1/consumer1.component';
import { Consumer2Component } from './consumer2/consumer2.component';
import { Consumer3Component } from './consumer3/consumer3.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    UserFormComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [UserFormComponent]
})
export class UserNameModule { }
