import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 3,
    width: 350,
    borderColor: colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.black,
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

export const ButtonOutline = ({ onPress = () => {}, children = '', type }) => {
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
