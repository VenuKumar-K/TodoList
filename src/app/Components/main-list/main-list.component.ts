import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  taskArray = [{ taskName: 'Angular', description: 'JavaScript Framework', isCompleted: false }];
  disabled = true;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    localStorage.setItem('taskArray',JSON.stringify(this.taskArray));
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      description: form.controls['description'].value,
      isCompleted: false
    });
    localStorage.setItem('taskArray',JSON.stringify(this.taskArray));
    form.reset();
  }

  onEdit(index: number) {
    this.disabled = false
  }

  onSubmitDes(index: number, des: any) {
    this.taskArray[index].description = des;
    localStorage.setItem('taskArray',JSON.stringify(this.taskArray));
    // console.log(this.taskArray);
    this.disabled = true

  }

  onDelete(index: number) {
    // console.log(index);
    this.taskArray.splice(index, 1);
    localStorage.setItem('taskArray',JSON.stringify(this.taskArray));
  }

  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}
