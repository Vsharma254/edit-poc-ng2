import { Component } from '@angular/core';
import { EmployeeService, Employee, NameIndex } from './employee-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edit-poc';
  nameIndex: NameIndex;
  constructor(private empService: EmployeeService) {
    this.reset();
  }
  reset() {
    this.nameIndex = { name: '', index: -1 };
  }
  getEditData(nmIndex: NameIndex) {
    this.nameIndex = nmIndex;
  }
  updateName() {
    if (this.nameIndex.name !== '') {
      this.empService.updateNameWithIndex(this.nameIndex);
      this.reset();
    } else {
      alert('Name is required to update!!')
    }
  }
}
