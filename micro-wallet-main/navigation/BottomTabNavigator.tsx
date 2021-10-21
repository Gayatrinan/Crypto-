/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PortfolioScreen from '../screens/PortfolioScreen';
import SendScreen from '../screens/SendScreen';
import { BottomTabParamList, PortfolioParamList, SendParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Portfolio"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="albums" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Send"
        component={SendNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="send" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PortfolioStack = createStackNavigator<PortfolioParamList>();

function PortfolioNavigator() {
  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{ headerTitle: 'Portfolio' }}
      />
    </PortfolioStack.Navigator>
  );
}

const SendStack = createStackNavigator<SendParamList>();

function SendNavigator() {
  return (
    <SendStack.Navigator>
      <SendStack.Screen
        name="SendScreen"
        component={SendScreen}
        options={{ headerTitle: 'Send' }}
      />
    </SendStack.Navigator>
  );
}
