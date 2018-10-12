import React from 'react';
import { AsyncStorage, Button, VirtualizedList, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-primitives';
import LiftItem from './LiftItem';

var moment = require('moment');
const uuidv1 = require('uuid/v1');

class Workout extends React.Component {

  constructor(props) {
    super(props);
      let openedWorkout = this.props.navigation.getParam("workoutData")
      this.state = { 
        data: openedWorkout,
        workoutDay: '',
        currentExercise: '',
        currentSet: 0,
        currentReps: 0,
        currentWeight: ''
      };
    }

    componentDidMount() {
      this.props.navigation.setParams({ _addItem: this._addItem });
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam("workoutDate")._i,
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

      set = {
        reps: this.state.currentReps,
        weight: this.state.currentWeight,
      }
    
      if(this.state.data.length === 0){
        workoutItem = {
          exercise: this.state.currentExercise,
          set: this.state.currentSet,
          sets: [set],
          date: this.props.navigation.getParam("workoutDate")._i,
          key: uuidv1(),
        }

        
        this.setState((prevState) => ({
          data: [workoutItem]
         }), () => {
          this._storeData();
          }
        );
      } else {
        this.state.data.forEach(element => {
          if (element.exercise === this.state.currentExercise){
            
            element.reps.concat(set)
          }
        });

        this.setState((prevState) => ({
          data: prevState.data.concat(workoutItem)
         }), () => {
          this._storeData();
          }
        );
      }


    };

    _storeData = async () => {
      try {
        await AsyncStorage.setItem(this.props.navigation.getParam("workoutDate")._i, JSON.stringify(this.state.data));
      } catch (error) {
       console.log("_storeData ERROR")
       console.log(error)
      }
    }

    _renderItem = ({item}) => (
      <View>
        <LiftItem
          exercise = {item.exercise}
          sets = {item.sets}
          />
      </View>
    );

    _keyExtractor(item, index){
      // console.log(item.key);
      return item.key;
  }

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
                  <View style={styles.exerciseStats}>
                    <View style={styles.statsTapCircleContainer}>
                      <Text>Set: </Text>
                      <TouchableOpacity
                        style={styles.statsTapCircle}
                        onPress={this.onIncrementSet}>
                        <Text style={styles.statsTapText}>
                          {this.state.currentSet.toString()}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.statsTapCircleContainer}>
                      <Text>Rep: </Text>
                      <TouchableOpacity
                        style={styles.statsTapCircle}
                        onPress={this.onIncrementReps}>
                        <Text style={styles.statsTapText}>
                          {this.state.currentReps.toString()}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.statsTapCircleContainer}>
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
          </View>
          <VirtualizedList
            style={styles.itemContainer}
            data={this.state.data}
            getItem={(data, index) => data[index]}
            getItemCount={data => data.length}
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
    paddingTop: 15,
  },
  input: {
    borderColor: 'gray', 
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  statsTapCircleContainer:{
    flexDirection: 'column',
  },
  statsTapCircle:{
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: '#AA4936',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsTapText: {
    color: 'white'
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