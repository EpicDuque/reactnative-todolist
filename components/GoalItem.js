import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    backgroundColor: '#333',
    borderColor: '#333',
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
  },
  listItemText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GoalItem;