import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo-List';
  tasks: Task[] = [
    new Task('Add A Task!')
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(exisitingTask: Task) {
    var userConfirm = confirm(`Are you sure you want to remove the following task? \n \n "${exisitingTask.title}"`)
    if(userConfirm) {
      this.tasks = this.tasks.filter(task => task != exisitingTask);
    }
  }
}

class Task {

constructor(public title: string) {

}
toggleIsDone() {
  this.isDone = !this.isDone;
}

public isDone = false;

}