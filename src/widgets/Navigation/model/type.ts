import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES} from '../../../shared/lib/routes';

export type RootStackParamList = {
  [ROUTES.home]: {
    test: '';
  };
  [ROUTES.another]: undefined;
};
export type NavigateProps<R extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, R>;
