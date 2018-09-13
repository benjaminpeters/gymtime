import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'GYMTIME',
    };
    
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Add Workout"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Workout', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
      );
    }
  }

  export default HomeScreen;