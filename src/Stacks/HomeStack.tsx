import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamList, HomeStackNavProps} from '../Params/HomeParamList';
import {Center} from '../Components/Center';
import {Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {AuthContext} from '../Components/AuthProvider';
import faker from 'faker';
import {AddProductRoute} from '../Routes/AddProductRoute';

const Stack = createStackNavigator<HomeParamList>();

function Feed({navigation}: HomeStackNavProps<'Feed'>) {
  return (
    <Center>
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
    </Center>
  );
}

function Product({route, navigation}: HomeStackNavProps<'Product'>) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate('EditProduct', {
            name: route.params.name,
          })
        }
      />
    </Center>
  );
}

function apiCall(x: any) {
  return x;
}

function EditProduct({route, navigation}: HomeStackNavProps<'EditProduct'>) {
  const [formState] = React.useState();
  const submit = React.useRef(() => {});
  submit.current = () => {
    // api call
    apiCall(formState);
    navigation.goBack();
  };

  React.useEffect(() => {
    navigation.setParams({submit});
  }, []);
  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}

export const HomeStack: React.FC<HomeParamList> = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      {AddProductRoute(Stack)}
      {/* <Stack.Screen
        options={({route}) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              style={{paddingRight: 8}}
              onPress={() => {
                // Submit
                if (route.params.submit) {
                  route.params.submit.current();
                }
              }}>
              <Text style={{color: 'violet'}}>Done</Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({route}) => ({headerTitle: `Product: ${route.params.name}`})}
        name="Product"
        component={Product}
      /> */}
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text>Logout</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
