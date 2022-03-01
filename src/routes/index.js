import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import routes from '../constants/routes';
import Home from '../screens/home';
import Repos from '../screens/home/repos';

const Stack = createStackNavigator();
const commonScreenOptions = { headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }

const Routes = () => {

    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' translucent backgroundColor="transparent" />
            <Stack.Navigator initialRouteName={routes.home} screenOptions={commonScreenOptions}>
                <Stack.Screen name={routes.home} component={Home} />
                <Stack.Screen name={routes.repos} component={Repos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;