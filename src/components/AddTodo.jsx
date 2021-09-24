import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if(value) {
      addTodo(value)
      setValue('')
    } else {
      Alert.alert('Please, input text')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        autoCorrect={false}
        placeholder='Input task...'
      />
      <Button style={styles.button} title={'Add task'} onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 16,
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginRight: 10,
  },
  button: {
    padding: 10,
  }
})