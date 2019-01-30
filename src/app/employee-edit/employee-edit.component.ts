import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmployeeService, Employee, NameIndex } from '../employee-service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  empList: Employee[] = [];
  @Output('getNameandIndex') getNameandIndex = new EventEmitter();
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getList();
  }
  edit(emp: Employee, index: number) {
    const nmIndex: NameIndex = { name: emp.name, index: index };
    this.getNameandIndex.emit(nmIndex);
  }
}
