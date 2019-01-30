import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee-service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  empList: Employee[] = [];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getList();
  }
}
