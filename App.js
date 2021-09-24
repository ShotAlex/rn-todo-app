import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { AddTodo } from './src/components/AddTodo';
import { List } from './src/components/List';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now().toString(), title, done: false }
    ])
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const changeStatus = (id) => {
    setTodos(prev => prev.map(todo => {
      const item = {...todo}
      if(item.id === id) item.done = !item.done;
      return item
    }))
  }

  const changeItem = (el) => {
    setTodos(prev => prev.map(todo => {
      const item = {...todo}
      if(item.id === el.id) item.title = el.title;
      return item
    }))
  }

  return (
    <View style={styles.container}>
      <Header title='TODO APP' />
      <AddTodo addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} changeStatus={changeStatus} changeItem={changeItem} />
      <Text style={styles.text}>ShotAlex</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: 'auto',
    paddingVertical: 12
  }
});
