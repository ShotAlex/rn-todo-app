import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { Todo } from './Todo';

export const List = ({ todos, removeTodo, changeStatus, changeItem }) => {
  if (todos.length === 0) {
    return (
      <Text style={styles.empty}>Todo is empty...</Text>
    )
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Todo
          item={item}
          removeTodo={removeTodo}
          changeStatus={changeStatus}
          changeItem={changeItem}
        />
    )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 20,
  },
  empty: {
    marginTop: 40,
    fontSize: 20,
  },
})