import React from 'react';
import Background from './components/background';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationFullscreenExit } from 'material-ui/svg-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.calApptComponentContainer}>
        <View style={styles.calHeader}>
          <Text style={{ borderColor: "green", borderWidth: 1, flex: 1}}>Tues, Jan 14</Text>
          <Text style={{ borderColor: "purple", borderWidth: 1, flex: 1}}> CALiCon</Text>
        </View>
        <View style={styles.calWeekdaySelector}>
          <Text>S M T W T F S</Text>
        </View>
        <View style={styles.calMeetingTimeSelectorContainer}>
          <Text>
            CalMeetingTimeSelector        
          </Text>
        </View>
        <View style={styles.calFooter}>
          <Text>CalFooter</Text>
        </View>
      </View>
      <Background />
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
    paddingTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'stretch',
  },
  calWeekdaySelector:{
    flex: 1,
    borderColor: "yellowgreen",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
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