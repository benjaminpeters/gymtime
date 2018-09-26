import React from 'react';
import { AsyncStorage, Button, View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutItem from './WorkoutItem'
var moment = require('moment');

class HomeScreen extends React.Component {

    componentDidMount() {
        this.props.navigation.setParams({ handleOpenWorkout: this.handleOpenWorkout });
      }

      static navigationOptions = ({ navigation }) => {
        return {
            title: 'GYMTIME',
            headerRight: (
                <Button
                    onPress={navigation.getParam('handleOpenWorkout')}
                    title="Add"
                    color="#fff"
                />
            ),
            };
        }

    onAddWorkout = (data, date) => {
        this.props.navigation.navigate('Workout', {
            workoutData: data,
            workoutDate: date
        });
    }

    handleOpenWorkout = (data) => {
        this.props.navigation.navigate('Workout', {
            workoutData:  undefined,
            workoutDate: moment()
        });
    }

    _renderItem = ({item}) => (
        <WorkoutItem
            date={item.date}
            type={item.type}
            workout={item.workout}
            openWorkout={this.onAddWorkout}
        />
      );
    
    render() {

        let prevWorkouts = [];
        _retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem('Workout');
              
              if (value !== null) {
                  console.log(value);
                prevWorkouts = value
              }
              else {
                  console.log('null returned')
              }
             } catch (error) {
               console.log("ERROR");
               console.log(error);
             }
          }
          _retrieveData();
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.itemContainer}
            data={prevWorkouts}
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
        paddingBottom: 20,
    }
})


  export default HomeScreen;