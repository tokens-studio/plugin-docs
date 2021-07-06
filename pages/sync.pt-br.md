# Sincronizar (Sync)

Como os tokens fazem mais sentido em um ambiente de equipe, algum tipo de sincronização é necessário para manter os valores atualizados enquanto a equipe está trabalhando em arquivos diferentes.

### JSONBin

Para começar a habilitar o Sync para o seu arquivo, vá para a guia `Sync` no plugin. Escolha `JSONBin` para selecionar JSONBin como seu provedor de sincronização.

Ao iniciar o recurso Sincronizar pela primeira vez, você não terá nenhuma credencial de provedor armazenada em seu dispositivo. Vá em frente e selecione `Add Credentials`.

Para `name`, escolha o nome que desejar. Você pode alterar o nome mais tarde.

Agora você precisa pegar suas credenciais do JSONBin. Para fazer isso, acesse JSONBin.io e registre uma conta.

Uma vez logado, clique no seu avatar e selecione `API-Keys`. Lá você encontrará sua chave secreta (`secret key`). Copie e insira no campo `Secret` no Figma Tokens.

Se você deseja criar um novo bin de sincronização, você pode deixar a parte ID em branco. O plugin irá criar um novo bin para você. Você também pode inserir um ID existente neste campo para vincular um compartimento existente.

import Callout from 'nextra-theme-docs/callout'

<Callout emoji="💡">
  Ao criar um novo bin, seus tokens são carregados para esse bin. No entanto, ao usar um ID existente, os tokens armazenados no controle remoto sobrescreverão os existentes.
</Callout>

### Trazendo sua equipe a bordo

Depois de definir um provedor para um documento, armazenamos a ID e o nome do seu compartimento neste documento. O `Secret` é deixado em branco, então cada membro da equipe terá que adicionar o segredo por conta própria. A razão para isso é que, no futuro, queremos habilitar diferentes permissões com base em diferentes usuários, alguns atuando apenas como consumidores, outros como colaboradores.

### Alterar credenciais de armazenamento

Você pode alternar entre as diferentes caixas de tokens armazenadas sempre que desejar. Para fazer isso, após ter criado mais de um item de provedor, clique em `Apply` para aplicar este conjunto de tokens ao documento atual.

### Atualizando tokens

Sempre que você atualizar um token, o remoto será atualizado automaticamente. Atualmente, não há nenhum processo de `Publish` em vigor, exceto a atualização de tokens.

### Pegando mudanças

O plugin irá buscar automaticamente os tokens remotos mais recentes em sua inicialização. De vez em quando, sua equipe pode ter feito alterações enquanto você estava com o plug-in aberto, para obter as alterações mais recentes, clique no botão `Pull from JSONbin` no canto superior direito.