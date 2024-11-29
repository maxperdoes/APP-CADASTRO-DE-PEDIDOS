import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [modelo, setModelo] = useState('');
  const [observacao, setObservacao] = useState('');
  const [valor, setValor] = useState('');
  const [pagamento, setPagamento] = useState('');

  const handleAdicionarPedido = () => {
    alert('Pedido adicionado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pedido</Text>
      <Text>Nome do Cliente:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text>CPF:</Text>
      <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
      <Text>Telefone:</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />
      <Text>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />
      <Text>Bairro:</Text>
      <TextInput style={styles.input} value={bairro} onChangeText={setBairro} />
      <Text>Cidade:</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />
      <Text>Estado:</Text>
      <TextInput style={styles.input} value={estado} onChangeText={setEstado} />
      <Text>Modelo de Touro:</Text>
      <TextInput style={styles.input} value={modelo} onChangeText={setModelo} />
      <Text>Observação:</Text>
      <TextInput style={styles.input} value={observacao} onChangeText={setObservacao} />
      <Text>Valor:</Text>
      <TextInput style={styles.input} value={valor} onChangeText={setValor} />
      <Text>Forma de Pagamento:</Text>
      <TextInput style={styles.input} value={pagamento} onChangeText={setPagamento} />
      <Button title="Adicionar Pedido" onPress={handleAdicionarPedido} />
      <Button title="Visualizar Pedidos" onPress={() => navigation.navigate('Visualizar')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 8, marginVertical: 10 },
});
