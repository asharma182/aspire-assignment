
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../features/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SpendingLimitScreen } from '../features/SpendingLimit'
import { SCALE_FACTOR } from '../constants';
import HomeIcon from '../resources/assets/icons/Home.svg'
import DebitCardIcon from '../resources/assets/icons/pay.svg'
import PaymentsIcon from '../resources/assets/icons/Payments.svg'
import CreditIcon from '../resources/assets/icons/Credit.svg'
import ProfileIcon from '../resources/assets/icons/user.svg'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon width={SCALE_FACTOR * 10} height={SCALE_FACTOR * 10} />
                    ),
                }} />
            <Tab.Screen name="Debit Card" component={HomeScreen}
                options={{
                    tabBarLabel: 'Debit Card',
                    tabBarIcon: ({ color, size }) => (
                        <DebitCardIcon width={SCALE_FACTOR * 10} height={SCALE_FACTOR * 10} />
                    ),
                }} />
            <Tab.Screen name="Payments" component={HomeScreen}
                options={{
                    tabBarLabel: 'Payments',
                    tabBarIcon: ({ color, size }) => (
                        <PaymentsIcon width={SCALE_FACTOR * 10} height={SCALE_FACTOR * 10} />
                    ),
                }} />
            <Tab.Screen name="Credits" component={HomeScreen}
                options={{
                    tabBarLabel: 'Credit',
                    tabBarIcon: ({ color, size }) => (
                        <CreditIcon width={SCALE_FACTOR * 10} height={SCALE_FACTOR * 10} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={HomeScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcon width={SCALE_FACTOR * 10} height={SCALE_FACTOR * 10} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

function AppContainer() {
    return (
        <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name="DebitCardScreen" component={Home} options={{ gestureEnabled: false, headerShown: false }} />
            <Stack.Screen name="SpendingLimitScreen" component={SpendingLimitScreen} options={{ gestureEnabled: false, headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppContainer