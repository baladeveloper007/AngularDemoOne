import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../Models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7213/api/v1/students/'; // The API URL
  constructor(private http: HttpClient) { }

  GetStudents(): Observable<Students>
  {
   return this.http.get<Students>(this.apiUrl);
  }

}
