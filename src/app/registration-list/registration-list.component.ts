import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.services';
@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit{
public dataSource!:MatTableDataSource <User>;
public users!:User[];
@ViewChild(MatPaginator) pajinator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
displayedColumns:string[]=['id','firstName','lastName','mobile','bmiresult','email','gender','package','enquirydate','action']
constructor(private api:ApiService){

}
ngOnInit(): void {
  this.getUsers();
}
getUsers(){
  this.api.getRegisterdUser()
  .subscribe(res=>{
    this.users=res;
    this.dataSource=new MatTableDataSource(this.users);
    this.dataSource.paginator=this.pajinator;
    this.dataSource.sort=this.sort;

  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
