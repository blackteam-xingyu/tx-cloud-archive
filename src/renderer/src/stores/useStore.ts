import useUserStore from '@renderer/stores/config/user';

const useStore = () => {
  return {
    user: useUserStore(),
  };
};
// 统一导出useStore方法
export default useStore;
