import { Options, Vue } from 'vue-class-component';
import { User } from '@/store/user/model/user.model';
import { UsersActions, usersMapper } from '@/store/user/users.module';
import UserListElement from '@/components/users/user-list-element/user-list-element.vue';

@Options({
  components: {
    UserListElement
  },
  computed: {
    ...usersMapper.mapState(['isUsersLoading', 'users'])
  },
  methods: {
    ...usersMapper.mapActions(['loadUsers'])
  }
})
export default class UsersView extends Vue implements Partial<Pick<UsersActions, 'loadUsers'>> {
  // Values from state
  users!: User[];
  isUsersLoading!: boolean;
  loadUsers = undefined;
}
