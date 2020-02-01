import React, { useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const EmptyMessage = props => {

  if(props.hide){
    return null;
  }

  return (
    <View style={styles.emptyMessageContainer}>
      <Image style={{ alignSelf: 'center' }} source={require('../img/Wilson.png')} />
      <Text style={styles.emptyText}>List is Empty</Text>
      <Text style={styles.emptyText}>Wilson is Dissapoint</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  emptyMessageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  }
})

export default EmptyMessage;