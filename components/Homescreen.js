import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutItem from './WorkoutItem'

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

    _renderItem = ({item}) => (
        <WorkoutItem
            title={item}
        />
      );
    
    render() {
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.itemContainer}
            data={[1,2,3,4,5]}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        marginLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        width: '95%',
        paddingTop: 15,
        paddingBottom: 20
    }
})


  export default HomeScreen;