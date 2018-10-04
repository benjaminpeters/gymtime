import React from 'react';
import { createStackNavigator } from 'react-navigation'; 
import HomeScreen from './components/Homescreen'
import Workout from './components/Workout'
import NewWorkout from './components/NewWorkout'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: Workout,
    NewWorkout: NewWorkout
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#AA4936',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
