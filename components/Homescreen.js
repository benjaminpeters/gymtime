import React from 'react';
import { AsyncStorage, Button, View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutItem from './WorkoutItem'
var moment = require('moment');

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
          this.state = { 
            prevWorkouts: [],
          };
        }

    componentDidMount() {
        this.props.navigation.setParams({ onAddWorkout: this.onAddWorkout });
        this.props.navigation.setParams({ handleOpenWorkout: this.handleOpenWorkout });
        this._retrieveData();
      }

      refresh() {
        this._retrieveData();
      }

      static navigationOptions = ({ navigation }) => {
        return {
            title: 'GYMTIME',
            headerRight: (
                <Button
                    onPress={navigation.getParam('onAddWorkout')}
                    title="Add"
                    color="#fff"
                />
            ),
            };
        }

    handleOpenWorkout = (data, date) => {
        this.props.navigation.navigate('Workout', {
            workoutData: data,
            workoutDate: date,
            refreshHomescreen: this.refresh,
        });
    }

    onAddWorkout = (data) => {
        this.props.navigation.navigate('NewWorkout', {
            workoutData:  [null],
            workoutDate: moment(),
            refreshHomescreen: this.refresh,
        });
    }

    _retrieveData = async () => {
        try {
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores = stores.reverse()

                    this.setState(() => ({
                        prevWorkouts: stores
                    }));
                });
            });
         } catch (error) {
           console.log(error);
         }
      }

    _renderItem = ({item}) => {
        return (
        <WorkoutItem
            date={item.date}
            exercise={item.exercise}
            set={item.set}
            reps={item.reps}
            weight={item.weight}
            workout={item}
            openWorkout={this.handleOpenWorkout}
            item={item}
        />
    )};

    _keyExtractor(item, index){
        let workoutobj = JSON.parse(item[1]);
        let key = workoutobj[0].key;
        return key;
    }
    
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