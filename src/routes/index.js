import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import routes from '../constants/routes';
import Home from '../screens/home';
import Repos from '../screens/home/repos';
import ReadMe from '../screens/home/readme';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const commonScreenOptions = { headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }

const Routes = () => {

    const {theme} = useSelector(state => state.userDetails)

    return (
        <NavigationContainer>
            <StatusBar barStyle={theme.title === 'dark' ? 'light-content':'dark-content'} translucent backgroundColor="transparent" />
            <Stack.Navigator initialRouteName={routes.home} screenOptions={commonScreenOptions}>
                <Stack.Screen name={routes.home} component={Home} />
                <Stack.Screen name={routes.repos} component={Repos} />
                <Stack.Screen name={routes.readMe} component={ReadMe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;