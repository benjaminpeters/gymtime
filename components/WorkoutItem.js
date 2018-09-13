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
        backgroundColor: "#fff",
        height: 150,
        marginBottom: 15,
      }
  })

  export default WorkoutItem;