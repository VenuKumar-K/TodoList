import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  taskArray = [{ taskName: 'Angular', description: 'JavaScript Framework', isCompleted: false }];

  constructor() { }
}
