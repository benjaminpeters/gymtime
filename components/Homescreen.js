import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutItem from './WorkoutItem'
var moment = require('moment');

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

    onAddWorkout = (data) => {
        this.props.navigation.navigate('Workout', {
            workoutData: data,
            otherParam: 'anything you want here',
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

        const testData = [
            {
                key: '4',
                date: moment("20180918"),
                type: 'Back',
                workout: [
                    {   
                        'exercise': 'DeadLifts',
                        'sets': [
                            {
                                '1': {
                                    'reps': 10,
                                    'weight': 135
                                }
                            },
                                {
                                '2': {
                                    'reps': 10,
                                    'weight': 135
                                }
                            }, 
                                {
                                '3': {
                                    'reps': 10,
                                    'weight': 135
                                }
                            }
                        ]
                    },
                    {
                        'exercise': 'Lat Pulldown'
                    },
                    {
                        'exercise': 'Seated Cable Row'
                    },
                    {
                        'exercise': 'Low Back Extension'
                    },
                    {
                        'exercise': 'Machine Row'
                    }
                ]
            },
            {
                key: '1',
                date: moment("20180913"),
                type: 'Leg',
                workout: [
                    {   
                        'exercise': 'Squats',
                        'sets': [
                            {
                                '1': {
                                    'reps': 10,
                                    'weight': 135
                                }
                            },
                                {
                                '2': {
                                    'reps': 10,
                                    'weight': 155
                                }
                            }, 
                                {
                                '3': {
                                    'reps': 10,
                                    'weight': 175
                                }
                            }
                        ]
                    },
                    {
                        'exercise': 'Leg Press'
                    },
                    {
                        'exercise': 'Laying Leg Curl'
                    },
                    {
                        'exercise': 'Seated Leg Extension'
                    },
                    {
                        'exercise': 'Seated Leg Curl'
                    }
                ]
            },
            {
                key: '2',
                date: moment("20180915"),
                type: 'Back',
                workout: [
                    {
                        'exercise': 'Deadlift'
                    },
                    {
                        'exercise': 'Lat Pulldown'
                    },
                    {
                        'exercise': 'Seated Row'
                    },
                    {
                        'exercise': 'Chin ups'
                    }
                ]
            },
            {
                key: '3',
                date: moment("20111031"),
                type: 'Chest',
                
            }
        ]
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.itemContainer}
            data={testData}
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