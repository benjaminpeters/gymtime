import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {

    componentDidMount() {
        this.props.navigation.setParams({ onAddWorkout: this.onAddWorkout });
      }

      static navigationOptions = ({ navigation }) => {
        return {
            title: 'GYMTIME',
            headerRight: (
                <Button
                    onPress={navigation.getParam('onAddWorkout')}
                    title="Add"
                    color="#fff"
                />
            ),
            };
        }

    onAddWorkout = () => {
        this.props.navigation.navigate('Workout', {
            itemId: 86,
            otherParam: 'anything you want here',
        });
    }
    
    render() {
      return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
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


  export default HomeScreen;