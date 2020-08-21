import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Day(props) {
  let daysMapping = {0: 'S', 1:'M', 2: 'T', 3: 'W', 4:'T', 5:'F', 6:'S' }
  return (
    <TouchableOpacity 
      style={ [props.style, styles.default, props.isActive ? styles.active : styles.inactive]}
      onPress={() => props.toggleDay(props.day)}
    >
      <Text style={props.isActive ? styles.activeText : styles.inactiveText}>
        {daysMapping[props.day]}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default:{
    height:45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: { 
    backgroundColor: '#fff',
    borderColor: "#0083FF",
    borderWidth: 1,
    width: 35
  },
  inactive: {
    width: 35
  },
  activeText: {
    color: '#0083FF',
    fontSize: 20
  },
  inactiveText: {
    color: 'lightgray',
    fontSize: 20
  }
});
