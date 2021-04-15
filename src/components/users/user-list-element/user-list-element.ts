import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { User } from '@/store/user/model/user.model';

@Options({})
export default class UserListElement extends Vue {
  @Prop()
  user!: User;
}
