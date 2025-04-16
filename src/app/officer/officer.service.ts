import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Officer, OfficerCreateDto, OfficerUpdateDto } from './officer.model';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  private apiUrl = 'http://localhost:3000/officers';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getOfficer(id: number): Observable<Officer> {
    return this.http.get<Officer>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createOfficer(officerData: OfficerCreateDto): Observable<Officer> {
    return this.http.post<Officer>(this.apiUrl, officerData, { headers: this.getHeaders() });
  }

  updateOfficer(id: number, officerData: OfficerUpdateDto): Observable<Officer> {
    return this.http.put<Officer>(`${this.apiUrl}/${id}`, officerData, { headers: this.getHeaders() });
  }

  deleteOfficer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
