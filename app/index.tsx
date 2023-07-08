import React, { useContext, useEffect } from 'react';
import AuthContext from './contexts/AuthContext';
import { useRootNavigationState, useRouter } from 'expo-router';
import { View } from 'react-native';
import { Loading } from './components/Loading';

const index = () => {
  const router = useRouter();
  const { signed, loadingStatus } = useContext(AuthContext);
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    if (loadingStatus) router.replace('signin');
  }, [navigationState?.key, loadingStatus]);

  return <View>{!navigationState?.key ? <Loading /> : <></>}</View>;
};

export default index;
