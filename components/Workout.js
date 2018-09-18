import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-primitives';
import LiftItem from './LiftItem';

class Workout extends React.Component {
    static navigationOptions = {
      title: 'Workout',
    };
  

    _renderItem = ({item}) => (
      <View>
        <LiftItem/>
      </View>
    );

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.itemContainer}>
          <View>
            <View style={styles.addItemContainer}>
              <Text>wassup</Text>
            </View>
            </View>
          </View>
          <FlatList
            style={styles.itemContainer}
            data={[1,2,3]}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      marginLeft: 0,
      paddingRight: 0,
      alignItems: 'center',
      justifyContent: 'center',
  },
  itemContainer: {
      width: '95%',
      paddingTop: 15,
      paddingBottom: 20,
  },
  addItemContainer: {
    backgroundColor: "#fff",
    height: 150,
    paddingTop: 15,
  }
})

export default Workout;