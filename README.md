# Aurora Studio

Landing page de um serviço profissional de design e desenvolvimento web freelancer, feita com HTML, CSS e JavaScript puros.

## Funcionalidades

- Cabeçalho com nome do projeto e navegação por seções.
- Slogan e botão **Saiba Mais**, com mensagem de confirmação e rolagem até os serviços.
- Cartões com três serviços.
- Seção sobre e formulário com nome, e-mail e mensagem.
- Validação básica do formulário e mensagem de agradecimento.
- Consulta de CEP pela API [ViaCEP](https://viacep.com.br/), preenchendo rua, bairro, cidade e UF.
- Layout responsivo para desktop e celular.
- Paleta de azul-marinho, verde-azulado, coral e areia; fontes Poppins e Inter.

> **Importante:** o formulário é demonstrativo. Ele valida os dados e mostra uma mensagem na tela, mas não envia mensagens para um servidor ou e-mail.

## Estrutura do projeto

```text
aurora-studio/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Para consultar o CEP, mantenha a conexão com a internet ativa.

Você também pode abrir a pasta no VS Code e usar a extensão Live Server, se já estiver instalada.

## Git e branches

O projeto utiliza duas branches principais:

- `main`: versão estável do projeto.
- `develop`: branch de desenvolvimento.

Se ainda não inicializou o Git na pasta do projeto, abra o terminal e execute:

```bash
git init
git add .
git commit -m "feat: cria landing page Aurora Studio"
git branch -M main
git branch develop
```

Para conferir as branches existentes:

```bash
git branch
```

Para trabalhar na branch de desenvolvimento:

```bash
git switch develop
```

Depois de concluir e testar as alterações em `develop`, você pode integrá-las à `main`:

```bash
git switch main
git merge develop
```

## Publicação opcional no GitHub Pages

1. Crie um repositório no GitHub.
2. Conecte a pasta local ao repositório remoto, seguindo as instruções do GitHub.
3. Envie a branch `main` para o GitHub.
4. No repositório, acesse **Settings > Pages**.
5. Escolha a branch `main` e a pasta `/(root)` e salve as configurações.

A consulta ViaCEP depende de conexão com a internet.
