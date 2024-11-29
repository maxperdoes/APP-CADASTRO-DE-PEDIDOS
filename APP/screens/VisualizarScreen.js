import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function VisualizarScreen() {
  const pedidos = [
    { id: 1, nome: 'João Silva', valor: 'R$ 200,00' },
    { id: 2, nome: 'Maria Oliveira', valor: 'R$ 300,00' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos Cadastrados</Text>
      {pedidos.map(pedido => (
        <View key={pedido.id} style={styles.pedido}>
          <Text>{pedido.nome}</Text>
          <Text>{pedido.valor}</Text>
          <Button title="Editar" onPress={() => alert('Editar pedido')} />
          <Button title="Excluir" onPress={() => alert('Excluir pedido')} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  pedido: { marginBottom: 20, padding: 10, borderWidth: 1 },
});
