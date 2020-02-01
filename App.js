/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Button,
	FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import EmptyMessage from './components/EmptyMessage';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);
	const [listEmpty, setListEmpty] = useState(true);

	const addGoalHandler = goalTitle => {
		// console.log('From Add: ' + enteredGoal);

		// [...courseGoals, enteredGoal] this means that we create a new array by pulling all elements from courseGoals then adding a new element enteredGoal
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), value: goalTitle },
		]);
    setIsAddMode(false);
    setListEmpty(false);
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== goalId);
    });
    setListEmpty(courseGoals.length == 1);
	};

	const cancelGoalModal = () => {
		setIsAddMode(false);
  }

	return (
		<View style={styles.mainContainer}>
			<View style={styles.mainBody}>

				<Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
				<GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalModal} />

				<View style={{ marginTop: 16 }}>
					<FlatList
						keyExtractor={(item, index) => item.id}
						data={courseGoals}
						renderItem={itemData =>
							<GoalItem
								title={itemData.item.value}
								id={itemData.item.id}
								onDelete={removeGoalHandler}
							/>}
					/>
				</View>
        
        <EmptyMessage hide={!listEmpty}/>

			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#222',
		height: '100%',
		padding: 10,
	},
	mainBody: {
    height: '100%',
  },
});
