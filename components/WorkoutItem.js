import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class WorkoutItem extends React.Component {
  
    handleWorkoutTouch = () => {
        this.props.openWorkout();
    }

    render() {
        
      return (
        <TouchableHighlight onPress={this.handleWorkoutTouch} underlayColor="transparent">
            <View style={styles.container}>
                <View style={styles.dateContainer}>
                    <Text>{this.props.date.format('dddd')}</Text>
                    <Text>{this.props.date.format("MMM Do YY")}</Text>
                    <Text>{this.props.type}</Text>
                </View>
                <View style={styles.liftContainer}>
                    {this.props.workout && this.props.workout.map((value) => {
                        return (
                            <Text>{value['exercise']}</Text>
                        );
                    })}
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