import React from 'react';
import { AsyncStorage, Button, View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutItem from './WorkoutItem'
var moment = require('moment');

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
          this.state = { 
            prevWorkouts: []
          };
        }

    componentDidMount() {
        this.props.navigation.setParams({ handleOpenWorkout: this.handleOpenWorkout });
        this._retrieveData();
      }

      static navigationOptions = ({ navigation }) => {
        return {
            title: 'GYMTIME',
            headerRight: (
                <Button
                    onPress={navigation.getParam('handleOpenWorkout')}
                    title="Add"
                    color="#fff"
                />
            ),
            };
        }

    onAddWorkout = (data, date) => {
        this.props.navigation.navigate('Workout', {
            workoutData: data,
            workoutDate: date
        });
    }

    handleOpenWorkout = (data) => {
        this.props.navigation.navigate('Workout', {
            workoutData:  this.state.prevWorkouts.length > 0 ? this.state.prevWorkouts : undefined,
            workoutDate: moment()
        });
    }

    _retrieveData = async () => {
        try {
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores.map((result, i, store) => {
                        // get at each store's key/value so you can work with it
                        let key = store[i][0];
                        let value = store[i][1];
                        this.setState((prevState) => ({
                            prevWorkouts: prevState.prevWorkouts.concat(JSON.parse(value))
                        }));
                    });
                });
            });
         } catch (error) {
           console.log("ERROR");
           console.log(error);
         }
      }

    _renderItem = ({item}) => {
        console.log(item)
        return (
        <WorkoutItem
            date={item.date}
            exercise={item.exercise}
            set={item.set}
            reps={item.reps}
            weight={item.weight}
            workout={item}
            openWorkout={this.onAddWorkout}
        />
        )};
    
    render() {

      return (
        <View style={styles.container}>
          <FlatList
            style={styles.itemContainer}
            data={this.state.prevWorkouts}
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
    }
})


  export default HomeScreen;