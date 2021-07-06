# Estilos (Styles)

Em vez de criar manualmente todos os tokens, você pode deixar o plug-in fazer o trabalho por você.

No documento onde seus estilos estão localizados, clique em `Import Styles` no canto superior direito do plugin.

---

import ReactPlayer from 'react-player'


<ReactPlayer
  muted
  width="100%"
  height="auto"
  loop
  playing
  controls
  url="/cxqos7Yhr4.mp4"
/>

O plugin irá converter automaticamente estilos de cores e tipografia em tokens para você. O que há de melhor nessa abordagem é que o plug-in tenta determinar suas unidades básicas e criar tokens para elas.

Isso significa que seus 4 estilos referenciando `Inter` como uma família de fontes, com 2 pesos de fonte, `Regular` e `Bold` se tornarão um conjunto de tokens de base (options) de `font-inter`, `font-weight-bold`, vários tamanhos de fonte, altura de linha, espaçamento entre letras e/ou parágrafo em um conjunto de tokens de Tipografia (decisões de estilo compostas por essas unidades básicas).

Este processo não é perfeito (ainda), mas com um pouco de ajuste manual você obterá um conjunto de tokens que é fácil de atualizar mais tarde.

import Callout from 'nextra-theme-docs/callout'

<Callout emoji="💡">
  A importação de estilos que possuem um ponto (`.`) em seus nomes não funcionará no momento. Use `/` como um divisor.
</Callout>

## Tokens de Cores

Importar estilos de cores para tokens é bastante simples. O que o plug-in fará é criar conjuntos de tokens de acordo com a nomenclatura de seus estilos de base, para que você obtenha tokens semelhantes a estes:

```
 "colors": {
    "Black": "#212121",
    "White": "#ffffff",
    "Primary ": {
      "100 T": "#e9f4ff",
      "200 T": "#d2e9ff",
      "300 T": "#8fc8ff",
      "400 T": "#4ba6ff",
      "500 (Base)": "#1e90ff",
      "600 S": "#1565b3",
      "700 S": "#0c3a66",
      "800 S": "#061d33",
      "900 S": "#030e19"
    },
    "Secondary ": {
      "100 T": "#e7efff",
      "200 T": "#cfdffe",
      "300 T": "#a0bffd",
      "400 T": "#709ffd",
      "500 (Base)": "#115ffb",
      "600 S": "#0a3997",
      "700 S": "#072664",
      "800 S": "#031332",
      "900 S": "#020919"
    },
```


## Tokens de Tipografia

Os tokens de tipografia suportados por enquanto são:

- Famílias de fontes
- Pesos de fonte
- Tamanhos de fonte
- Alturas de linha
- Espaçamento entre letras
- Espaçamento de parágrafo

O Token JSON resultante para esses estilos importados será semelhante a este:

```
"fontFamilies": {
    "heading": "Monument Extended",
    "body": "Circular Std"
  },
  "lineHeights": {
    "body": "140%",
    "auto": "AUTO",
    "none": "100%",
    "tight": "110%"
  },
  "fontWeights": {
    "heading": {
      "regular": "Regular",
      "bold": "Bold"
    },
    "body": {
      "regular": "Regular",
      "bold": "Bold"
    }
  },
  "fontSizes": {
    "sm": "16",
    "lg": "20",
    "xl": "25",
    "2xl": "31",
  },
  "letterSpacing": {
    "normal": "0%",
    "tight": "-1%",
    "tighter": "-3%",
    "wide": "5%"
  },
}
```

A importação de estilos resultante deve pareecer um conjunto de tokens semelhante ao mostrado abaixo. O que isso significa é que você pode atualizar qualquer um dos seus valores de token e todos os seus estilos também serão atualizados automaticamente. Alterar a família de fontes de seus títulos agora é uma questão de alterar um único token.

```
"typography": {
  "Headings": {
    "Display 1": {
      "Bold": {
        "fontFamily": "$fontFamilies.heading",
        "fontWeight": "$fontWeights.heading.bold",
        "lineHeight": "$lineHeights.tight",
        "fontSize": "$fontSizes.8xl",
        "letterSpacing": "$letterSpacing.tighter",
        "paragraphSpacing": "$paragraphSpacing.none"
      }
    },
    "Display 2": {
      "Bold": {
        "fontFamily": "$fontFamilies.heading",
        "fontWeight": "$fontWeights.heading.bold",
        "lineHeight": "$lineHeights.tight",
        "fontSize": "$fontSizes.7xl",
        "letterSpacing": "$letterSpacing.tighter",
        "paragraphSpacing": "$paragraphSpacing.none"
      }
    },
    "Display 3": {
      "Bold": {
        "fontFamily": "$fontFamilies.heading",
        "fontWeight": "$fontWeights.heading.bold",
        "lineHeight": "$lineHeights.tight",
        "fontSize": "$fontSizes.6xl",
        "letterSpacing": "$letterSpacing.tighter",
        "paragraphSpacing": "$paragraphSpacing.none"
      }
    }
  }
}
```

## Manter os estilos sincronizados

É claro que você quer que seus estilos sejam atualizados sempre que atualizar seus tokens. Para fazer isso, é importante manter a estrutura de nomenclatura dos tokens igual aos seus estilos no Figma. Ou seja, se você renomear quaisquer tokens, certifique-se de renomear suas contrapartes de estilos também.

Se você criar um novo estilo posteriormente e quiser mantê-lo em tokens, crie-o no Figma Tokens e use o botão `Create Styles`, ao invés de aplicar Import Styles novamente.

`Create Styles` basicamente diz ao Figma para criar qualquer estilo que não exista.

![](/create-styles.jpg)
