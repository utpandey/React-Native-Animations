import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Center} from './Components/Center';
import {AuthStack} from './Stacks/AuthStack';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './Components/AuthProvider';
import {AppTabs} from './AppTabs';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
