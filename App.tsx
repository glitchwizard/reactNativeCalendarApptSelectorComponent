import React from 'react';
import Background from './components/background';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export default function App() {
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
            <CalendarTodayIcon />
          </View>
        </View>
        <View style={styles.calWeekdaySelector}>
          <Text style={styles.calWeekdayItemText}>S</Text>
          <Text style={styles.calWeekdayItemText}>M</Text>
          <Text style={styles.calWeekdayItemText}>T</Text>
          <Text style={styles.calWeekdayItemText}>W</Text>
          <Text style={styles.calWeekdayItemText}>T</Text>
          <Text style={styles.calWeekdayItemText}>F</Text>
          <Text style={styles.calWeekdayItemText}>S</Text>
        </View>
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
    flex: 1
  },
  calWeekdaySelector:{
    flex: 1,
    flexDirection: "row",
    borderColor: "yellowgreen",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  calWeekdayItemText: {
    fontSize: 30
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
});