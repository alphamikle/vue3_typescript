import { User } from '@/store/user/model/user.model';
import { Actions, Getters, Module, Mutations } from 'vuex-smart-module'
import { Utils } from '@/store/utils/utils';
import { UserData } from '@/store/user/model/users.response.interface';
import { AxiosResponse } from 'axios';

export class UserState {
  isUsersLoading = false;
  users: User[] = [];
}

export class UserMutations extends Mutations<UserState> {
  replaceUsers(users: User[]): void {
    this.state.users = users;
  }

  addUser(user: User): void {
    this.state.users.push(user);
  }

  startLoading(): void {
    this.state.isUsersLoading = true;
  }

  endLoading(): void {
    this.state.isUsersLoading = false;
  }
}

// If u need - u can create you own UserGetters class for using

export class UserActions extends Actions<UserState, Getters<UserState>, UserMutations, UserActions> {
  async loadUsers(): Promise<void> {
    this.mutations.startLoading();
    const axios = Utils.createAxiosInstance();
    const response: AxiosResponse<UserData[]> = await axios.get<UserData[]>('https://opencollective.com/webpack/members/all.json');
    const users = response.data.map(userData => new User({ id: userData.MemberId, name: userData.name, imageUrl: userData.image }));
    this.mutations.endLoading();
    this.mutations.replaceUsers(users);
  }
}

export const userModule = new Module({
  state: UserState,
  // Set getters as undefined explicitly
  getters: undefined,
  mutations: UserMutations,
  actions: UserActions
});
