import { Injectable, OnInit } from '@angular/core';
import * as fromModel from './employee-model';

@Injectable()
export class EmployeeService {
    employeeList: fromModel.Employee[];
    constructor() {
        this.employeeList = [{ id: 1, name: 'John1', desc: 'Belong to IT deprtment' },
        { id: 1, name: 'John2', desc: 'Belong to IT deprtment' },
        { id: 1, name: 'John3', desc: 'Belong to IT deprtment' },
        { id: 1, name: 'John4', desc: 'Belong to IT deprtment' },
        { id: 1, name: 'John5', desc: 'Belong to IT deprtment' },
        { id: 1, name: 'John6', desc: 'Belong to IT deprtment' },
        { id: 1, name: 'John7', desc: 'Belong to IT deprtment' }]
    }
    getList(): fromModel.Employee[] {
        return this.employeeList;
    }
    updateNameWithIndex(nmIndex: fromModel.NameIndex) {
        this.employeeList[nmIndex.index].name = nmIndex.name;
    }
}
