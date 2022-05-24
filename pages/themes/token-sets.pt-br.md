# Token Sets (Temas)

Com a Versão 36, conjuntos de token (`Tokens Sets`, ou temas) são introduzidos!

Agora você pode dividir seus tokens em vários conjuntos ou temas.

Dividir tokens tem muitos benefícios:
- Permitem que você divida opções e decisões
- Oferece a capacidade de separar semanticamente tokens
- Conjuntos diferentes podem ser expostos ativando apenas o que você precisa

---

import ReactPlayer from 'react-player'

<ReactPlayer
  muted
  width="100%"
  height="auto"
  loop
  playing
  controls
  url="/8M7EiMsoIW.mp4"
/>

##### Criando sets
Você pode criar um novo conjunto clicando no `+` próximo aos conjuntos existentes. Insira um nome único.

![](/token-sets.png)

#### Mudando para um conjunto (set)
Clique no conjunto de tokens (não na caixa de seleção) para mudar o contexto do editor para este novo conjunto.

#### Renomeando ou excluindo um conjunto (set)
Clique com o botão direito em um conjunto para exibir as opções de renomear e excluir.

#### Ativando (verificando) um conjunto (set)
Ao marcar a caixa de seleção, você ativa este conjunto, o que significa que esses tokens serão expostos ao Figma. Se você tiver vários conjuntos (por exemplo, um tema claro e um tema escuro), poderá substituir as decisões que podem ter sido definidas em outro conjunto.

#### Alteração da ordem dos conjuntos
Você pode arrastar conjuntos para definir sua ordem. Todos os conjuntos de tokens ativos são expostos e mesclados em um grande conjunto de tokens, se alguns tokens tiverem exatamente o mesmo nome e caminho, o último ganha (por exemplo, se `colors.foreground` existe em um tema claro e escuro, aquele que é visível mais tarde nas vitórias do `set list`)