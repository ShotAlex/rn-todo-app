import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';


export const ChangeItem = ({ item, changeItem, setIsEdit }) => {
  const [value, setValue] = useState(item.title)

  const pressHandler = () => {
    if(value) {
      setIsEdit(false)
      changeItem({...item, title: value})
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
        autoFocus={true}
      />
      <Button style={styles.button} title={'Apply'} onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    maxWidth: '70%',
    paddingVertical: 12,
  },
  button: {},
})