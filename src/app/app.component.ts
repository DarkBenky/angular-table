import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logged = true;
  unlogged = true;
  result = [];
  add_panelle = true;
  edit = true;

  data = [
    {
      id: 1,
      name: 'John Doe',
      last_name: 'xy',
      age: 20,
      grade: 'A',
      courses: ['Mathematics', 'Physics', 'History'],
      last_edit: 'none',
    },
    {
      id: 2,
      name: 'Jane Smith',
      last_name: 'xy',
      age: 21,
      grade: 'B',
      courses: ['Computer Science', 'English', 'Chemistry'],
      last_edit: 'none',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      last_name: 'xy',
      age: 19,
      grade: 'C',
      courses: ['Biology', 'Art', 'Geography'],
      last_edit: 'none',
    },
  ];

  search() {
    let searchInput = document.querySelector('.search') as HTMLInputElement;
    let searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name.toLowerCase().includes(searchTerm)) {
        console.log(this.data[i]);
        this.result.push(this.data[i]);
      }

      for (let j = 0; j < this.data[i].courses.length; j++) {
        if (this.data[i].courses[j].toLowerCase().includes(searchTerm)) {
          console.log(this.data[i]);
          this.result.push(this.data[i]);
        }
      }
    }
  }

  ngOnInit(): void {
    console.log('on init...');
  }

  login() {
    let usernameInput = document.querySelector('.username') as HTMLInputElement;
    let passwordInput = document.querySelector('.password') as HTMLInputElement;

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username == 'user' && password == 'user') {
      this.logged = false;
      this.unlogged = true;
    }
  }

  log_out() {
    this.logged = true;
    this.unlogged = false;
  }

  clear_results() {
    this.result = [];
  }

  edit_page() {
    this.edit = !this.edit;
  }

  submit_data(student_id) {
    let id = document.querySelector('.id') as HTMLInputElement;
    let name = document.querySelector('.name') as HTMLInputElement;
    let age = document.querySelector('.age') as HTMLInputElement;
    let grade = document.querySelector('.grade') as HTMLInputElement;
    let lastname = document.querySelector('.last_name') as HTMLInputElement;

    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let mounth = currentDate.getMonth();
    let day = currentDate.getDay();
    let Hours = currentDate.getHours();
    let Minutes = currentDate.getMinutes();
    let Seconds = currentDate.getSeconds();

    let current_time = `last edit: ${year}/${mounth}/${day} ${Hours}:${Minutes} ${Seconds}`

    this.data[student_id].id = parseInt(id.value);
    this.data[student_id].name = name.value;
    this.data[student_id].age = parseInt(age.value);
    this.data[student_id].grade = grade.value;
    this.data[student_id].last_name = lastname.value;
    this.data[student_id].last_edit = current_time
  }

  add_panel() {
    this.add_panelle = !this.add_panelle;
  }

  add_to_data() {
    console.log('test');
    let id_ = document.querySelector('.id_add') as HTMLInputElement;
    let id_int = parseInt(id_.value);
    let name_ = document.querySelector('.name_add') as HTMLInputElement;
    let age_ = document.querySelector('.age_add') as HTMLInputElement;
    let age_int = parseInt(age_.value);
    let grade_ = document.querySelector('.grade_add') as HTMLInputElement;
    let courses_ = document.querySelector('.courses_add') as HTMLInputElement;
    let c = courses_.value;
    let c_ = c.split(/\s+/);
    let last_name_ = document.querySelector('.last_name_add') as HTMLInputElement;

    let new_log = {
      id: id_int,
      name: name_.value,
      last_name: last_name_.value,
      age: age_int,
      grade: grade_.value,
      courses: c_,
      last_edit: 'none'
    };
    console.log(new_log);
    this.data.push(new_log);
  }
}
