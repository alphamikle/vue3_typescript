import { User } from '@/store/user/model/user.model';
import { Actions, createMapper, Getters, Module, Mutations } from 'vuex-smart-module';
import { Utils } from '@/store/utils/utils';
import { UsersResponse } from '@/store/user/model/users.response.interface';
import { AxiosResponse } from 'axios';
import { ComponentMapper } from 'vuex-smart-module/lib/mapper';

export class UsersState {
  isUsersLoading = false;
  users: User[] = [];
}

export class UsersMutations extends Mutations<UsersState> {
  replaceUsers(users: User[]): void {
    this.state.users = users;
  }

  startLoading(): void {
    this.state.isUsersLoading = true;
  }

  endLoading(): void {
    this.state.isUsersLoading = false;
  }
}

export class UsersGetters extends Getters<UsersState> {}

export class UsersActions extends Actions<UsersState, Getters<UsersState>, UsersMutations, UsersActions> {
  async loadUsers(): Promise<void> {
    this.mutations.startLoading();
    const axios = Utils.createAxiosInstance();
    const response: AxiosResponse<UsersResponse> = await axios.get<UsersResponse>('https://fakerapi.it/api/v1/persons?_locale=ru_RU&_quantity=1000');
    const users = response.data.data.map(userData => new User({
      name: `${userData.firstname} ${userData.lastname}`,
      imageUrl: userData.image
    }));
    this.mutations.endLoading();
    this.mutations.replaceUsers(users);
  }
}

export const usersModule: Module<UsersState, UsersGetters, UsersMutations, UsersActions> = new Module({
  state: UsersState,
  getters: UsersGetters,
  mutations: UsersMutations,
  actions: UsersActions
});

export const usersMapper: ComponentMapper<UsersState, UsersGetters, UsersMutations, UsersActions> = createMapper(usersModule);
