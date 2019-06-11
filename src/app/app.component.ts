import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Todo} from './Model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Drag & Drop in Angular 7';
  //website = 'https://samorgill.com';

  todos: Todo[] = [];
  doing: Todo[] = [];
  done: Todo[] = [];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        name: 'Angular',
        category: 'Web Development',
        state: 'done'
      },
      {
        id: 2,
        name: 'Flexbox',
        category: 'Web Development',
        state: 'done'
      },
      {
        id: 3,
        name: 'iOS',
        category: 'App Development',
        state: 'done'
      },
      {
        id: 4,
        name: 'Java',
        category: 'Software development',
        state: 'done'
      }
    ];
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
