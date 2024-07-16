import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ text, color, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '20%', 
    aspectRatio: 1, 
    borderWidth: 1,
    borderRadius: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10, 
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});