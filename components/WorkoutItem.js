import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
var moment = require('moment');

class WorkoutItem extends React.Component {
  
    render() {
        
      return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text>{this.props.date.format('dddd')}</Text>
                <Text>{this.props.date.format("MMM Do YY")}</Text>
                <Text>{this.props.type}</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
      },
      dateContainer: {
        alignSelf:'center',
        justifyContent: 'center',
        paddingLeft: 15
      }
  })

  export default WorkoutItem;