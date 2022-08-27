# Dados compartilhados

Acreditamos que os dados armazenados pelo Figma Tokens também devem ser acessíveis por outros fabricantes de plugins, para criar um ecossistema próspero de ferramentas que possam se comunicar umas com as outras. Imagine um mundo onde somos capazes de armazenar dados de plugins em uma camada ou documento, e outros plugins podem fazer o backup e fazer as coisas que seus plugins fazem melhor. É por isso que abrimos os dados do plug-in que o Figma Tokens armazena em seu documento ou nós para que você também possa usá-lo com outros plug-ins.

## Como funciona?
Estamos armazenando tokens em um documento de dados de plug-in compartilhado em `tokens`. Outros plugins podem ler a partir daí. 

Também estamos armazenando decisões aplicadas em cada nó (node) no mesmo nome compartilhado. Tudo o que você precisa fazer é descobrir quais tokens estão armazenados em um nó. O Figma fornece algumas funções úteis para isso.

### Obtendo tokens armazenados no documento
`figma.root.getSharedPluginData("tokens", "values")` permite que você leia todos os tokens armazenados no documento.

### Obtendo tokens aplicados em uma camada
`node.getSharedPluginData("tokens", key)` fornece o token que foi aplicado nesse `nó` para essa `chave`. Para descobrir quais `keys` estão disponíveis, você deve primeiro executar `node.getSharedPluginDataKeys("tokens")` no `node` para descobrir quais `keys` estão definidas. Com esse resultado você pode consultar os tokens armazenados.

### Aplicando tokens em uma camada
`node.setSharedPluginData("tokens", key, value)` permite armazenar um token em uma camada. Você precisa ter certeza de que `key` é [qualquer uma das chaves de dados do plug-in](https://github.com/six7/figma-tokens/blob/main/src/config/properties.js) que nós esta usando.

## Ajudantes de Tokens Figma
Nós [criamos uma ferramenta](https://www.npmjs.com/package/@six7/figma-tokens-helpers) que permite que você leia todos os itens acima com mais facilidade em seu próprio plugin. Estamos expondo funções que envolvem nossas funções de dados de plugins, para que você possa facilmente obter tokens armazenados no documento, na camada e até mesmo obter os tokens resolvidos levando em consideração os conjuntos/temas ativados!

## Exemplos de integrações com outros Plugins
### Automator
O Automator é capaz de ler e escrever no espaço compartilhado do plugin. Você pode criar todos os tipos de automações malucas - você pode até criar conjuntos inteiros de tokens usando o Automator. Nós até [criamos uma automação que cria automaticamente a documentação](https://automator.community/automation/create-documentation-for-figma-tokens) para você!

### Pro Layout Panel
O que tornaria um ótimo aprimoramento de layout automático ainda melhor? A capacidade de escolher tokens de design como seus valores de espaçamento. [Pro Layout Panel](https://www.mrbiscuit.design) permite que você faça isso, então você pode usar os tokens que você criou no Figma Tokens e aplicá-los (usando a última combinação de conjunto usada no Figma Tokens)