import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

const screens = [
  {
    pontoLocal: 'Nações Unidas Qd. 45 Par',
    pontoRota: 'Unesp/Camélias',
    pontoHora: '9:34',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Nações Unidas Qd. 45 Impar',
    pontoRota: 'Jd. Ouro Verde',
    pontoHora: '9:36',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Nações Unidas Qd. 42 Impar',
    pontoRota: 'Jd. Ouro Verde',
    pontoHora: '9:39',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Nações Unidas Qd. 48 Impar',
    pontoRota: 'Jd. Ouro Verde',
    pontoHora: '9:33',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Nações Unidas Qd. 48 Par',
    pontoRota: 'Unesp/Camélias',
    pontoHora: '9:37',
    target: 'Embarque',
  },
  {
    pontoLocal: 'dos Cajazeiros Qd. 08 Par',
    pontoRota: 'Do Centro via Av. Duque de Cax...',
    pontoHora: '9:48',
    target: 'Embarque',
  },
  {
    pontoLocal: 'dos Cajazeiros Qd. 08 Impar',
    pontoRota: 'Do Geisel via Av. Duque de Caxias',
    pontoHora: '10:21',
    target: 'Embarque',
  },
];

export const List = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={screens}
      keyExtractor={item => item.pontoLocal}
      renderItem={({ item }) => (
        <ListItem
          pontoLocal={item.pontoLocal}
          pontoRota={item.pontoRota}
          pontoHora={item.pontoHora}
          onPress={() => navigation.push(item.target)}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
  );
};
