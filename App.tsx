import React from 'react';
import Background from './components/background';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WeekdayPicker from "react-native-weekday-picker";

<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>


export default function App() {
  let daySelectionIndicatorPadding = 9;
  let days = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0, 0: 0 };
  

  return (
    <View style={styles.container}>
      <View style={styles.calApptComponentContainer}>
        <View style={styles.calHeader}>
          <Text style={{ borderColor: "green", borderWidth: 1, flex: 1 }}>
            Tues, Jan 14
          </Text>
          <View
            style={{
              borderColor: "purple",
              borderWidth: 1,
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Icon name="calendar-blank" size={30} color="#000" />
          </View>
        </View>
            <WeekdayPicker
              days={days}
              //onChange={this.handleChange}
              style={styles.picker}
              dayStyle={styles.day}
            />
        
        <View style={styles.calMeetingTimeSelectorContainer}>
          <Text>CalMeetingTimeSelector</Text>
        </View>
        <View style={styles.calFooter}>
          <Text>CalFooter</Text>
        </View>
      </View>
      <Background />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Lato, sans-serif',
  },
  calApptComponentContainer: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  calHeader: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'stretch',
  },
  calWeekdayItemText: {
    flex: 1,
    fontSize: 20,
    textAlign: "center"
  },
  calWeekdaySelector:{
    flex: 1,
    flexDirection: "row",
    borderColor: "yellowgreen",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  calMeetingTimeSelectorContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: "orange",
  },
  calFooter: {
    flex: 1,
    borderWidth: 1,
    borderColor: "yellow",
  },
  picker: {
    padding: 30
  },
  day: {
    margin: 5
  }
});