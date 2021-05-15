import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { CommonService } from 'src/app/service/common.service';
import { ServerHttpService } from 'src/app/service/server-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];

  constructor(
    private commonService: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.serverHttp.getStudents().subscribe((data) => {
      this.students = data;
      console.log(data);
    })
  }

  public addStudent() {
    this.router.navigate(['student-form']);
  }

}
