import React from 'react';
import {Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-primitives';
import LiftItem from './LiftItem';

class Workout extends React.Component {

  constructor(props) {
    super(props);
      this.state = { 
        data: [],
        workoutDay: '',
        currentExercise: '',
        currentSet: 0,
        currentReps: 0,
        currentWeight: ''
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

    onIncrementSet = () => {
      this.setState((prevState) => ({
        currentSet: prevState.currentSet += 1
      }));
    }
    
    onIncrementReps = () => {
      this.setState((prevState) => ({
        currentReps: prevState.currentReps += 1
      }));
    }

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
                  style={styles.input}
                  onChangeText={(workoutDay) => this.setState({workoutDay})}
                  value={this.state.workoutDay}
                />
                <Text>Exercise: </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(currentExercise) => this.setState({currentExercise})}
                  value={this.state.currentExercise}
                />
                <View style={styles.exerciseStats}s>
                  <Text>Set: </Text>
                  <TouchableOpacity
                     style={styles.statsTapCircle}
                     onPress={this.onIncrementSet}>
                    <Text>
                      {this.state.currentSet.toString()}
                    </Text>
                  </TouchableOpacity>
                  <Text>Rep: </Text>
                  <TouchableOpacity
                     style={styles.statsTapCircle}
                     onPress={this.onIncrementReps}>
                    <Text>
                      {this.state.currentReps.toString()}
                    </Text>
                  </TouchableOpacity>
                  <Text>Weight: </Text>
                  <TextInput
                    style={styles.statsInput}
                    onChangeText={(currentWeight) => this.setState({currentWeight})}
                    value={this.state.currentWeight}
                  />
                </View>
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
  },
  input: {
    borderColor: 'gray', 
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  statsTapCircle:{
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: '#AA4936',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsInput: {
    height: 20,
    width: 30,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  exerciseStats :{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default Workout;