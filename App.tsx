import React from 'react';
import Background from './components/background';
import { StyleSheet, View, Text, StatusBar, Image, Button, TextInput } from 'react-native';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import WeekdayPicker from "./react-native-weekday-picker";
import { EditorBorderColor } from 'material-ui/svg-icons';

<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>


export default function App() {
  let daySelectionIndicatorPadding = 9;
  let days = { 0: 0, 1: 0, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0 };
  

  return (
    <View style={styles.container}>
      <View style={styles.calApptComponentContainer}>
        <View style={styles.calHeader}>
          <Text style={{ flex: 1, fontSize: 17 }}>Tues, Jan 14</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <MaterialCommunityIcon
              name="calendar-blank"
              size={30}
              color="#000"
            />
          </View>
        </View>
        <WeekdayPicker
          days={days}
          //onChange={this.handleChange}
          style={styles.picker}
          dayStyle={styles.day}
        />
        <View style={styles.calMeetingTimeSelectorContainer}>
          <View style={styles.calMeetingTimeSelectorBookend}></View>
          <View style={styles.calMeetingTimeHourSelector}>
            <Text style={styles.calMeetingInactiveTimeSelectorTextDiv}>1</Text>

            <View style={styles.calMeetingTimeSelectorDividerLine} />

            <Text style={styles.calMeetingActiveTimeSelectorTextDiv}>2</Text>

            <View style={styles.calMeetingTimeSelectorDividerLine} />

            <Text style={styles.calMeetingInactiveTimeSelectorTextDiv}>3</Text>
          </View>
          <View style={styles.calMeetingTimeMinuteSelector}>
            <Text style={styles.calMeetingInactiveTimeSelectorTextDiv}>00</Text>

            <View style={styles.calMeetingTimeSelectorDividerLine} />

            <Text style={styles.calMeetingActiveTimeSelectorTextDiv}>15</Text>

            <View style={styles.calMeetingTimeSelectorDividerLine} />

            <Text style={styles.calMeetingInactiveTimeSelectorTextDiv}>30</Text>
          </View>
          <View style={styles.calMeetingTimeAmPmSelector}>
            <Text style={styles.calMeetingInactiveTimeSelectorTextDiv}>AM</Text>

            <View style={styles.calMeetingTimeSelectorDividerLine} />

            <Text style={styles.calMeetingActiveTimeSelectorTextDiv}>PM</Text>

            <View style={styles.calMeetingTimeSelectorDividerLine} />

            <Text style={styles.calMeetingInactiveTimeSelectorTextDiv}>-</Text>
          </View>
          <View style={styles.calMeetingTimeSelectorBookend}></View>
        </View>
        <View style={styles.calFooter}>
          <View style={styles.calFooterUpperSection}>
            <View style={styles.calFooterItem}>
              <View style={styles.calFooterLeftItem}>
                <SimpleLineIcon
                  name="user-female"
                  size={30}
                  color="#000"
                  style={StyleSheet.calFooterUserIcon}
                />
                <View style={styles.calFooterUserInfoContainer}>
                  <Text style={styles.calFooterUserName}>Kenneth Lai</Text>
                  <Text style={styles.calDatePickerButton}>CHANGE</Text>
                </View>
              </View>
            </View>
            <View style={styles.calFooterItem}>
              <View style={styles.calFooterRightItem}>
                <View style={styles.calFooterRightItemUpper}>
                  <Text style={styles.calReminderTextInputHeader}>
                    Reminder:
                  </Text>
                  <TextInput style={styles.calReminderTextInput} />
                </View>
                <View style={styles.calFooterRightItemLower}>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.calFooterLowerSection}>
            <Text style={styles.calDatePickerDoneButton}>
                DONE
            </Text>
          </View>
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
    backgroundColor: "#fff",
    fontFamily: "Lato, sans-serif",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  calApptComponentContainer: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
  },
  calHeader: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calWeekdayItemText: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
  },
  calWeekdaySelector: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  picker: {},
  day: {
    margin: 5,
  },
  calMeetingTimeSelectorContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  calMeetingTimeHourSelector: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calMeetingTimeMinuteSelector: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calMeetingTimeAmPmSelector: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calMeetingTimeSelectorBookend: {
    flex: 1,
  },
  calMeetingActiveTimeSelectorTextDiv: {
    fontSize: 30,
  },
  calMeetingInactiveTimeSelectorTextDiv: {
    flex: 1,
    fontSize: 30,
    justifyContent: "center",
    alignContent: "center",
    textAlignVertical: "center",
    color: "gray",
  },
  calMeetingTimeSelectorDividerLine: {
    height: 1,
    borderBottomColor: "#0083FF",
    borderBottomWidth: 2,
    width: "60%",
  },
  calFooter: {
    flex: 1,
  },
  calFooterUpperSection: {
    flexDirection: "row",
  },
  calFooterLowerSection: {
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
  },
  calFooterItem: {
    flex: 1,
  },
  calFooterLeftItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calFooterRightItem: {
    flexDirection: "column",
  },
  calFooterUserIcon: {
    flex: 1,
    padding: 10,
  },
  calFooterUserInfoContainer: {
    flex: 2,
    padding: 10,
  },
  calFooterUserName: {
    fontSize: 20,
  },
  calDatePickerButton: {
    color: "#0083FF",
    fontWeight: "bold",
  },
  calReminderTextInput: {
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 5,
    height: 35,
  },
  calReminderTextInputHeader: {
    color: "gray",
    fontSize: 15,
  },
  calFooterRightItemUpper: {},
  calFooterRightItemLower: {},
  calDatePickerDoneButton: {
    fontSize: 25,
    color: "#0083FF",
    fontWeight: "bold"
  },
});