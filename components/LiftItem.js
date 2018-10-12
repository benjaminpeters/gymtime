import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

class LiftItem extends React.Component {
  
    render() {
        
      return (
        <View style={styles.container}>
            <Text>Exercise: {this.props.exercise} </Text>
            <Text>Set: {this.props.sets} </Text>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        height: 75,
        flexDirection: 'column',
      },
  })

  export default LiftItem;