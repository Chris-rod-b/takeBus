import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    paddingVertical: 0,
    borderRadius: 6,
    width: 180,
    borderWidth: 15,
    borderColor: colors.red,
    marginVertical: 3,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },

  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.primary,
  },
});

export const Button = ({ onPress = () => {}, children = '', type }) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (type === 'outline') {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
