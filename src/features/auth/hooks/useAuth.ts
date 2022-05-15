import {meThunk} from './../ui/model/store';
import {useEffect} from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from './../../../@app/store/hooks/index';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  useEffect(() => {
    if (user) return;

    dispatch(meThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {user};
};
