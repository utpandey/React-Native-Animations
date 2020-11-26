import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList, AuthNavProps} from '../Params/AuthParamList';
import {Center} from '../Components/Center';
import {AuthContext} from '../Components/AuthProvider';
import {Button, Text} from 'react-native';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation}: AuthNavProps<'Login'>) {
  // console.warn(navigation.navigate);
  const {login} = useContext(AuthContext);
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="go to Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
      <Button
        title="Log me In"
        onPress={() => {
          navigation.navigate('Register');
          login();
        }}
      />
    </Center>
  );
}

function Register({navigation, route}: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: 'Sign In'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitle: 'Sign Up'}}
      />
    </Stack.Navigator>
  );
};
