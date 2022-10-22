# Tokens de Espaçamento (Spacing)

Os tokens de espaçamento permitem definir valores para `Auto Layout` que podem ser reutilizados. Depois de aplicar um token de espaçamento a uma camada, ele será atualizado sempre que você alterar esse token, portanto, qualquer camada que contenha uma referência a `$spacing.container` será atualizada, quando você atualizar esse token específico.

#### Como usar

Para fazer os tokens de espaçamento funcionarem, comece criando tokens na categoria `Spacing`.

Em seguida, selecione ou crie uma camada de `Auto Layout` (não funcionará em nenhum outro tipo de camada).

Depois de selecionado, aplique os tokens de espaçamento clicando com o botão esquerdo (todos os valores usarão este token) ou clique com o botão direito para especificar qual parte do `Auto Layout` você deseja atingir (`gap`,` horizontal` ou `vertical`. Outros virão em breve).

---

import ReactPlayer from 'react-player'

<ReactPlayer
  muted
  width="100%"
  height="auto"
  loop
  playing
  controls
  url="/uhrCSTbr5Q.mp4"
/>
