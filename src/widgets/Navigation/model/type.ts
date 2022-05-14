import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES} from '../../../shared/lib/routes';

export type RootStackParamList = {
  [ROUTES.AUTH_MAIN]: undefined;
  [ROUTES.AUTH_LOGIN]: undefined;
  [ROUTES.AUTH_REGISTER]: undefined;
};
export type NavigateProps<R extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, R>;
