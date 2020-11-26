import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchParamList} from '../Params/SearchParamList';
import {Center} from '../Components/Center';
import {Text} from 'react-native';

const Stack = createStackNavigator();

function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

export const SearchStack: React.FC<SearchParamList> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: 'Search',
        }}
      />
    </Stack.Navigator>
  );
};
