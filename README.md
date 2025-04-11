# Sistema de Gerenciamento de Funcionários

Este projeto é uma aplicação simples para gerenciar funcionários de uma empresa de tecnologia, utilizando TypeScript orientado a objetos integrado com HTML e CSS.

## Estrutura do Projeto

```
Sistema-Funcionarios/
│
├── ts/                  # Código TypeScript
│   ├── interfaces/      # Interface IPessoa
│   ├── models/          # Classe abstrata Funcionario e heranças
│   ├── dist/            # Arquivo compilado main.js (gerado com tsc)
│   └── main.ts          # Código principal que conecta tudo
│
├── index.html           # Formulário HTML
├── style.css            # Estilização visual
├── tsconfig.json        # Configuração TypeScript
└── README.md            # Documentação
```

## Como usar
1. Instale o TypeScript se necessário:
   ```bash
   npm install -g typescript
   ```
2. Compile o TypeScript:
   ```bash
   tsc
   ```
3. Abra o arquivo `index.html` no navegador.

## Funcionalidades
- Cadastro de diferentes tipos de funcionários (Desenvolvedor ou Designer)
- Campos extras condicionais
- Cálculo automático de salário com base na função
- Exibição dinâmica dos funcionários cadastrados
