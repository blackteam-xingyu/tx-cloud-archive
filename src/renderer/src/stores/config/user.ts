import { UserInfo } from '@renderer/engines/interface';

const useUserStore = defineStore('user', {
  state: (): UserInfo => {
    return {
      id: '',
      name: '',
      avatar: '',
      token: '',
    };
  },
  actions: {
    login() {},
    logout() {
      this.$reset();
      const router = useRouter();
      router.push('/login');
    },
  },
  persist: {
    storage: localStorage,
    key: 'UserInfo',
  },
});

export default useUserStore;
