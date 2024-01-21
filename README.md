# Jogo de Damas em Vite + React TypeScript

Este é um jogo de damas desenvolvido usando Vite, React e TypeScript.

## Como iniciar o projeto

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/nosycolg/checkers-game.git

2. Navegue até o diretório do projeto:
    ```bash
    cd checkers-game

3. Instale as dependências do projeto:

    ```bash
    npm install

4. Inicie o aplicativo:

    ```bash
    npm run dev

O aplicativo estará disponível em http://localhost:3000 no seu navegador.

### Captura de Peças

- Se uma peça adversária estiver uma casa diagonal à frente de uma peça do jogador atual e houver uma casa vazia imediatamente atrás da peça adversária, o jogador pode capturar a peça adversária.
- Para capturar uma peça adversária, clique na casa vazia imediatamente atrás da peça adversária.

### Contagem de Peças Capturadas

- O número de peças capturadas por cada jogador é exibido na parte inferior do tabuleiro.
- "White Pieces Captured" mostra o número de peças brancas capturadas por jogadores pretos.
- "Black Pieces Captured" mostra o número de peças pretas capturadas por jogadores brancos.

### Alternância de Jogadores

- O jogo alterna entre jogadores após cada movimento bem-sucedido.
- O jogador atual é exibido na parte inferior do tabuleiro.
