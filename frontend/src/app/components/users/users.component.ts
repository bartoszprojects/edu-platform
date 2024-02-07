import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {UsersApiService} from "./users-api.service";
import {map, Observable, tap} from "rxjs";
import {User, UsersState} from "../../store/users/user.state";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {addUserStart, getUsersStart} from "../../store/users/user.actions";
import {selectUsers, selectUsersState, selectUserWholeState} from "../../store/users/user.selectors";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>
  usersFromStore$: Observable<User[]>
  constructor(private usersApiService: UsersApiService, private store: Store) {
    this.users$ = this.usersApiService.getUsers()
    this.usersFromStore$ = this.store.select(selectUsers)

  }
  ngOnInit() {
    this.store.select(selectUserWholeState).subscribe(usersState => {
      console.log('whole usersState: ', usersState);
    });
  }

  getUsersStart() {
    this.store.dispatch(getUsersStart())
  }

  addUsersStart() {
    this.store.dispatch(addUserStart())
  }

}
