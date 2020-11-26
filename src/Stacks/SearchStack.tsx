import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchParamList} from '../Params/SearchParamList';
import {Center} from '../Components/Center';
import {Button, FlatList} from 'react-native';
import faker from 'faker';
import {AddProductRoute} from '../Routes/AddProductRoute';

const Stack = createStackNavigator();

function Search({navigation}) {
  const [show, setShow] = React.useState(false);
  return (
    <Center>
      <Button
        title="Search Products"
        onPress={() => {
          setShow(true);
        }}
      />
      {show ? (
        <FlatList
          style={{width: '100%'}}
          renderItem={({item}) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  navigation.navigate('Product', {
                    name: item,
                  });
                }}
              />
            );
          }}
          data={Array.from(Array(50), () => faker.commerce.product())}
          keyExtractor={(product, idx) => product + idx}
        />
      ) : null}
      {/* <Text>Search</Text> */}
    </Center>
  );
}

export const SearchStack: React.FC<SearchParamList> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: 'Search',
        }}
      />
      {AddProductRoute(Stack as any)}
    </Stack.Navigator>
  );
};
