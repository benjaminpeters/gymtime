import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

class LiftItem extends React.Component {
  
    render() {
        
      return (
        <View style={styles.container}>
            <Text>Exercise: {this.props.exercise} </Text>
            <Text>Set: {this.props.set} </Text>
            <Text>Reps: {this.props.reps} </Text>
            <Text>Weight: {this.props.weight}</Text>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        height: 75,
        // marginBottom: 15,
        // paddingTop: 15,
        flexDirection: 'column',
        // alignItems: 'center',
      },
  })

  export default LiftItem;