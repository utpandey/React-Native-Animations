import {StackNavigationState, TypedNavigator} from '@react-navigation/native';
import React from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import {Center} from '../Components/Center';
import {HomeParamList, HomeStackNavProps} from '../Params/HomeParamList';
import {SearchParamList} from '../Params/SearchParamList';

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

export const AddProductRoute = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState<Record<string, object | undefined>>,
    any,
    any,
    any
  >,
) => {
  return (
    <>
      <Stack.Screen
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
      />
    </>
  );
};
