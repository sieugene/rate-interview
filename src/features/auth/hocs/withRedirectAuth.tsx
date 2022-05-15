import {useLinkTo} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ROUTES} from '../../../shared/lib/routes';
import {useAuth} from '../hooks/useAuth';

export function withRedirectAuth<P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P> {
  return props => {
    const {user} = useAuth();
    const linkTo = useLinkTo();
    useEffect(() => {
      if (!!user) {
        linkTo(`/${ROUTES.HOME}`);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return <Component {...props} />;
  };
}
