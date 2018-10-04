import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
var moment = require('moment');

class WorkoutItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.item[0],
      workoutArr: JSON.parse(this.props.item[1])
    }
  }

    handleWorkoutTouch = () => {
        this.props.openWorkout(this.state.workoutArr, moment(this.state.date));
    }

    render() {
      return (
        <TouchableHighlight onPress={this.handleWorkoutTouch} underlayColor="transparent">
            <View style={styles.container}>
                <View style={styles.dateContainer}>
                    <Text>{moment(this.state.date).format("ddd MMM Do YYYY")}</Text>
                </View>
                <View style={styles.liftContainer}>
                {
                  this.state.workoutArr.map((val) => (
                      <Text>{val.exercise}</Text>
                    )
                  )
                }
                 
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
        paddingLeft: 5,
        flex: 1,
        flexWrap:'wrap'
      }
  })

  export default WorkoutItem;