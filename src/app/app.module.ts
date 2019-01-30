import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee-service/employee-service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
