# Contribuindo

Se você deseja começar a contribuir com o Figma Tokens, leia esta breve orientação que deve começar.

1. Clone o repositório
2. Execute o `yarn` para instalar as dependências
3. Execute `yarn build:watch` para construir o plug-in e observe as alterações
4. Abra o Figma -> Plugins -> Development -> Import plugin from manifest... e escolha o arquivo `manifest.json` deste repositório.


### Problemas conhecidos
 
#### Não é possível ler o documento de propriedade de indefinido

Este erro pode ser resolvido limpando o cache do Figma. Para fazer isso, siga as etapas descritas em [este documento](https://help.figma.com/hc/en-us/articles/360040328553-Can-I-work-offline-with-Figma-#clear-data) .
 
```
Mac
Use o aplicativo Terminal para limpar o cache.

Saia do aplicativo de desktop Figma.
Abra o Terminal.app e digite o seguinte comando: `rm -rf "$HOME/Library/Application Support/Figma/"{Desktop,DesktopProfile}`
Tente abrir o aplicativo de desktop Figma novamente.
```
