import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

class WorkoutItem extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
            <Text>{this.props.title}</Text>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
      container: {
        width: 100,
        backgroundColor: "#fff",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
      }
  })

  export default WorkoutItem;