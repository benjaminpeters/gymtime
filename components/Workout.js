import React from 'react';
import {Button, FlatList, TextInput } from 'react-native';
import { View, Text, StyleSheet } from 'react-primitives';
import LiftItem from './LiftItem';

class Workout extends React.Component {

  constructor(props) {
    super(props);
      this.state = { 
        data: [],
        workoutDay: '',
        currentExercise: ''
      };
    }

    componentDidMount() {
      this.props.navigation.setParams({ _addItem: this._addItem });

      if(this.props.navigation.getParam("workoutData") != undefined) {
        this.setState(() => ({
          data: this.props.navigation.getParam("workoutData").map((value) => {
            return (
                value['exercise']
            );
          })
         }));
      }
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam("workoutDate").format("ddd MMM Do YYYY"),
        headerRight: (
          <Button
            onPress={navigation.getParam('_addItem')}
            title="+"
            color="#fff"
          />
        ),
      }
    };

    _addItem = () => {
      this.setState((prevState) => ({
        data: prevState.data.concat(this.state.currentExercise)
       }));
    };
  

    _renderItem = ({item}) => (
      <View>
        <LiftItem
          data = {item}
          />
      </View>
    );

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.itemContainer}>
          <View>
            <View style={styles.addItemContainer}>
              <View>
                <Text>Day: </Text>
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(workoutDay) => this.setState({workoutDay})}
                  value={this.state.workoutDay}
                />
                <Text>Exercise: </Text>
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(currentExercise) => this.setState({currentExercise})}
                  value={this.state.currentExercise}
                />
                </View>
              </View>
            </View>
          </View>
          <FlatList
            style={styles.itemContainer}
            data={this.state.data}
            extraData={this.state}
            _keyExtractor = {(item, index) => item.id}
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