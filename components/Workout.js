import React from 'react';
import { Button, View, Text } from 'react-native';

class Workout extends React.Component {
    static navigationOptions = {
      title: 'Workout',
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Workout Screen</Text>

          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  export default Workout;