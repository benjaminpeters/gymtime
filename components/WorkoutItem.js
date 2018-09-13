import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
var moment = require('moment');

class WorkoutItem extends React.Component {
  
    render() {

        const date = new Date();
        
      return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text>{moment().format('dddd')}</Text>
                <Text>{moment().format("MMM Do YY")}</Text>
            </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        height: 150,
        marginBottom: 15,
      },
      dateContainer: {
        alignSelf:'center',
        justifyContent: 'center',
      }
  })

  export default WorkoutItem;