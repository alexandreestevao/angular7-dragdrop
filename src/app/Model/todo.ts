export class Todo {
  id: number;
  name: string;
  category:string;
  state: string;

  constructor(id: number = 0,
              name: string = '',
              category: string = '',
              state: string = '') {
      this.id = id;
      this.name = name;
      this.category = category;
      this.state = state;
    }  
}
