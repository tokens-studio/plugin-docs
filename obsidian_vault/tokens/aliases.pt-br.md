# Apelidos (Aliases)

A coisa legal sobre Tokens Studio for Figma é que você pode fazer referência a outros tokens como um valor para seus tokens (ou, como podemos chamar, seus estilos). Isso significa que você pode fazer com que a cor de sua marca seja uma referência a `colors.red.500`, ou ter um token de fundo que obtém seu valor de um token de `colors.black` enquanto um token de primeiro plano obtém seu valor de um token `colors.white`.

Para usar um alias em seus tokens, nós os escrevemos na seguinte notação: `$spacing.sm`

import Callout from 'nextra-theme-docs/callout'

<Callout emoji="💡">
  As referências (`references`) são sensíveis a maiúsculas e minúsculas, o que significa que você deve escrever suas referências como seus tokens são nomeados (geralmente em minúsculas).
</Callout>

O que isso faz é dizer ao plugin para procurar um token de `spacing.sm`, se for encontrado, usar esse valor. Sempre que você altera `spacing.sm`, o token que o referencia também muda.

Você também pode incorporar apelidos dentro de tokens de cores! Se você quiser um estilo de cor que use a cor da marca, mas reduza sua opacidade para 50%, basta escrever: `rgba ($colors.brand, 0.5)`