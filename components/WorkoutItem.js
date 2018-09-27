import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
var moment = require('moment');

class WorkoutItem extends React.Component {
  
    handleWorkoutTouch = () => {
        this.props.openWorkout(this.props.workout, moment(this.props.date));
    }

    render() {
      return (
        <TouchableHighlight onPress={this.handleWorkoutTouch} underlayColor="transparent">
            <View style={styles.container}>
                <View style={styles.dateContainer}>
                    <Text>{this.props.exercise}</Text>
                </View>
                <View style={styles.liftContainer}>
                </View>
            </View>
        </TouchableHighlight>
      );
    }
  }


  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        height: 150,
        marginBottom: 15,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      dateContainer: {
        alignSelf:'center',
        justifyContent: 'center',
        paddingLeft: 15
      },
      liftContainer:{
        paddingLeft: 25,
        flex: 1,
        flexWrap:'wrap'
      }
  })

  export default WorkoutItem;