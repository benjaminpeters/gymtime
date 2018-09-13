import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class Workout extends React.Component {
    static navigationOptions = {
      title: 'Workout',
    };
  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={styles.container}>
          <Text>Workout Screen</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})

export default Workout;