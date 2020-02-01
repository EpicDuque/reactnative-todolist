import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal, Text } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  const cancelGoalHandler = () => {
    setEnteredGoal('');
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 16}}>
          Add Goal
        </Text>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgb(215, 215, 215)',
    padding: 6,
    color: 'black',
    fontSize: 18,
    borderRadius: 9,
    width: '80%',
    shadowColor: 'black',
    shadowRadius: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    margin: 8,
  }
});

export default GoalInput;