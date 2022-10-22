# Tokens de cor

Os tokens de cor constituem uma grande parte dos tokens do Figma, pois eles estão fortemente integrados aos estilos do Figma, mas oferecem opções que os Estilos (ainda) não oferecem.

Você pode usar tokens de cores para várias coisas:

- Atualizando estilos de cores
- Criação de estilos de cores
- Aplicando uma cor de preenchimento
- Aplicando uma cor de traço

## Cores sólidas

Existem várias maneiras de escrever tokens de cores:

- Hex: `#ff0000`
- RGB: `rgb(255, 0, 0)`
- RGBA: `rgba(255, 0, 0, 1)`
- HSLA: `hsl(120, 50, 50, 1)`

Por padrão, um token faz referência a uma cor sólida (cores únicas).

## Gradientes

Você pode definir tokens de cor gradiente especificando uma sintaxe semelhante a css: `linear-gradient(45deg, #ffffff 0%, #000000 100%)`..

Se você precisar de várias etapas de cores, basta adicionar mais (o mínimo é 2). `linear-gradient(45deg, #ffffff 0%, #ff0000 50%, #000000 100%)`

### Referências de token
A grande vantagem dos gradientes de token é que você pode criá-los com referência a outro token, algo que não é possível no próprio Figma. `linear-gradient(45deg, $colors.white 0%, $colors.black 100%)`

### Valores alfa (opacidade)
A opacidade também é suportada, você pode escrever seus gradientes assim: `linear-gradient(45deg, rgba($colors.primary, 0.5) 0%, rgba($colors.primary, 1) 100%)`

### Limitações
- Posicionar seu gradiente em uma camada, como você pode fazer no Figma, atualmente não é possível, pois não saberemos onde posicioná-lo, pois armazenamos apenas o grau, não qualquer translação.