import { apiClient } from '@/lib/apiService';
import { UserContent } from '@/types/user';

const applyAxiosConfigurations = (session: UserContent | null) => {
  if (session?.token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${session.token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

export default applyAxiosConfigurations;
