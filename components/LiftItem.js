import React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';

class LiftItem extends React.Component {
  
    render() {
        
      return (
        <View style={styles.container}>
            <Text>sup</Text>
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