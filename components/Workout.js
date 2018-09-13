import React from 'react';
import { Button, View, Text } from 'react-native';

class Workout extends React.Component {
    static navigationOptions = {
      title: 'Workout',
    };
  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Workout Screen</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  export default Workout;