import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const TAREFAS = [
  { id: 1, descricao: 'Tomar banho antes de dormir', feito: false },
  { id: 2, descricao: 'Passear com o cachorro', feito: false },
  { id: 3, descricao: 'Estudar para o enem', feito: true },
  { id: 4, descricao: 'Ir para escola', feito: true },
];

const Item = ({ descricao, feito }) => (
  <View style={[styles.item, feito && styles.itemFeito]}>
    <Text style={styles.title}>{descricao}</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <h1>Lista de Tarefas</h1>
      <FlatList
        data={TAREFAS}
        renderItem={({ item }) => <Item descricao={item.descricao} feito={item.feito} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  itemFeito: {
    textDecorationLine: 'line-through',
  },
});

export default App;