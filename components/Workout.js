import React from 'react';
import { AsyncStorage, Button, VirtualizedList, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-primitives';
import LiftItem from './LiftItem';

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

    componentDidUpdate(){
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

      workoutItem = {
        exercise: this.state.currentExercise,
        set: this.state.currentSet,
        reps: this.state.currentReps,
        weight: this.state.currentWeight,
        date: this.props.navigation.getParam("workoutDate")
      }

      this.setState((prevState) => ({
        data: prevState.data.concat(workoutItem)
       }), () => {
        this._storeData();
      }
      );

    };

    _storeData = async () => {
      try {
        await AsyncStorage.setItem(this.props.navigation.getParam("workoutDate"), JSON.stringify(this.state.data));
      } catch (error) {
       console.log("_storeData ERROR")
      }
    }

    _renderItem = ({item}) => (
      <View>
        <LiftItem
          exercise = {item.exercise}
          set = {item.set}
          reps = {item.reps}
          weight = {item.weight}
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
          { this.state.data[0] != null ? 
          <VirtualizedList
            style={styles.itemContainer}
            data={this.state.data}
            getItem={(data, index) => data[index]}
            getItemCount={data => data.length}
            extraData={this.state}
            _keyExtractor = {(item, index) => item.id}
            renderItem={this._renderItem}
            />
          : null}
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