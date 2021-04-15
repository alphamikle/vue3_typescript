import { createStore, Module } from 'vuex-smart-module';
import { usersModule } from '@/store/user/users.module';

export const store = createStore(new Module({
  modules: {
    usersModule
  }
}));
