import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    paddingBottom: 10,
  },
  text: {
    color: '#000001',
    fontSize: 24,
  },
})