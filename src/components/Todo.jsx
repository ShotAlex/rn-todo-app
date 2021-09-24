import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ChangeItem } from './ChangeItem';


export const Todo = ({ item, removeTodo, changeStatus, changeItem }) => {
  const [isEdit, setIsEdit] = useState(false)

  const isDone = item.done ? styles._done : {}
  const isDoneWrapper = item.done ? styles._doneWrapper : {}

  return (
    <TouchableOpacity TouchableOpacity={0.9} onLongPress={changeStatus.bind(null, item.id)}>
      <ScrollView>
        {isEdit ? (
          <View style={[styles.item, isDoneWrapper]}>
            <ChangeItem item={item} changeItem={changeItem} setIsEdit={setIsEdit} />
          </View>
        ) : (
          <View style={[styles.item, isDoneWrapper]}>
            <Text style={[styles.text, isDone]}>{item.title}</Text>
            <View style={styles.imageContainer}>
              <View style={styles.imageWrapper} onTouchStart={() => setIsEdit(true)}>
              <Image style={styles.image} source={require(`../assets/images/pencil.png`)}/>
              </View>
              <View style={styles.imageWrapper} onTouchStart={removeTodo.bind(null, item.id)}>
              <Image style={styles.image} source={require(`../assets/images/delete.png`)}/>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  hiddenRow: {
    backgroundColor: 'red',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    paddingLeft: 8,
    paddingVertical: 4,
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  _done: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.3,
  },
  _doneWrapper: {
    backgroundColor: '#f7f7f7',
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    maxWidth: '70%',
  },
  imageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imageWrapper: {
    padding: 12,
  },
  image: {
    width: 20,
    height: 20,
  }
})