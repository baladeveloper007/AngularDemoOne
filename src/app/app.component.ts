import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service';
import { HttpClient } from '@angular/common/http';
import { Students } from './Models/students.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [StudentService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoUnit';
  students: any;

  constructor(private studentService: StudentService) {
    this.GetStudents();
  }

  GetStudents() {
    this.studentService.GetStudents().subscribe({
      next: (data) => { this.students = data },
      error: (error) => { console.log(error)}
    });
  }

}
