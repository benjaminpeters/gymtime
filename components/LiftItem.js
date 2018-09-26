import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

class LiftItem extends React.Component {
  
    render() {
        
      return (
        <View style={styles.container}>
            <Text>{this.props.exercise} </Text>
            <Text>{this.props.set} </Text>
            <Text>{this.props.reps} </Text>
            <Text>{this.props.weight}</Text>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        height: 75,
        marginBottom: 15,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
  })

  export default LiftItem;