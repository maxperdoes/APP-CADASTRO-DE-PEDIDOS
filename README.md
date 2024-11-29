# APP-CADASTRO-DE-PEDIDOS

Descrição do Aplicativo
O aplicativo é uma solução simples para cadastro de pedidos, com funcionalidades para adicionar, visualizar e, futuramente, editar e excluir pedidos. A aplicação foi desenvolvida utilizando React Native com Expo, e utiliza React Navigation para navegação entre as telas.

Estrutura do Projeto
perl
Copiar código
pedidos-app/
├── App.js                   # Configuração da navegação entre as telas
├── screens/                 
│   ├── CadastroScreen.js     # Tela de cadastro de pedidos
│   ├── VisualizarScreen.js   # Tela para visualizar pedidos cadastrados
├── node_modules/             # Dependências do projeto
├── package.json              # Dependências e configurações do projeto
├── .gitignore                # Arquivos ignorados pelo Git
├── babel.config.js           # Configuração do Babel
└── package-lock.json         # Dependências de versões
Funcionalidades Principais
Tela de Cadastro de Pedidos (CadastroScreen.js):

Formulário de cadastro com os seguintes campos:
Nome do Cliente
CPF
Telefone
Endereço
Bairro
Cidade
Estado
Modelo de Touro
Observação
Valor
Forma de Pagamento

Botão para adicionar o pedido (Adicionar Pedido).
Navegação para a tela de Visualizar Pedidos (Visualizar Pedidos).
Tela de Visualização de Pedidos (VisualizarScreen.js):

Exibição de uma lista de pedidos cadastrados (dados fictícios para exemplo).
Para cada pedido, é exibido o nome e o valor.
Botões para Editar e Excluir (funcionalidades futuras a serem implementadas).
Navegação para a tela de Cadastro de Pedidos.


Dependências Instaladas
@react-navigation/native: Biblioteca principal para navegação.
@react-navigation/stack: Para navegação baseada em pilha (Stack Navigation).
react-native-screens: Necessária para otimização da navegação em React Native.
react-native-safe-area-context: Para lidar com a área segura em dispositivos com bordas arredondadas.
react-native-gesture-handler: Biblioteca para gestos (necessária para a navegação).
react-native-reanimated: Para animações de transições entre telas.
react-native-vector-icons: Biblioteca para ícones personalizados (a ser usada para botões, por exemplo).

Estrutura de Navegação
O aplicativo usa React Navigation para navegar entre duas telas principais:

CadastroScreen (Tela de Cadastro): O usuário pode adicionar um novo pedido.
VisualizarScreen (Tela de Visualização): O usuário pode visualizar a lista de pedidos.
A navegação é configurada no arquivo App.js, utilizando um Stack Navigator.

Funcionalidade de Cadastro de Pedidos
Cadastro de Pedido: Os dados inseridos no formulário são coletados por meio de estados (useState) e podem ser utilizados para salvar pedidos (essa funcionalidade ainda não está implementada, mas pode ser facilmente adicionada com um backend ou local storage).
Botão Adicionar Pedido: Envia os dados do formulário e exibe um alerta de sucesso.
Funcionalidade de Visualização de Pedidos
Pedidos Mock: Dados fictícios são exibidos na tela de visualização. Cada pedido é mostrado com nome e valor.
Botões Editar/Excluir: Esses botões ainda não têm funcionalidade implementada, mas são projetados para permitir que os pedidos sejam editados ou excluídos.
Funcionalidades Futuras
Persistência de Dados: Implementação de armazenamento local (como AsyncStorage ou banco de dados) para salvar os pedidos cadastrados.
Edição e Exclusão de Pedidos: Adicionar lógica para editar e excluir pedidos da lista.
Validação de Formulário: Implementar validação nos campos de entrada para garantir que todos os dados necessários sejam fornecidos.
Conclusão
Este aplicativo oferece uma estrutura simples para o cadastro e visualização de pedidos. Ele pode ser expandido com funcionalidades como persistência de dados, edição e exclusão de pedidos, além de melhorias no design da interface e validação de entradas.
