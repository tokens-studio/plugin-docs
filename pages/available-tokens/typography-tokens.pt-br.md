# Tokens de Tipografia (Typography tokens)

Os tokens de tipografia suportados por enquanto são:

- Famílias de fontes (Font families)
- Pesos da fonte (Font weights)
- Tamanhos de fonte (Font sizes)
- Alturas de linha (Line heights)
- Espaçamento entre letras (Letter spacing)
- Espaçamento entre parágrafos (Paragraph spacing)
- Recuo de parágrafo (Paragraph Indent)
- Decoração de texto (Text decoration)
- Caso de texto (Text case)

Um token de tipografia é um token composto que consiste em alguns parâmetros que compõem uma definição de tipo. 

Também temos tipos de token individuais para cada uma dessas opções, pois você também pode aplicá-los individualmente. 

No entanto, para criar estilos, você teria que usar um token de tipografia.

Um exemplo de token de tipografia se parece com isso:

```
{
  "Bold": {
    "value": {
      "fontFamily": "{fontFamilies.heading}",
      "fontWeight": "{fontWeights.heading.bold}",
      "lineHeight": "{lineHeights.tight}",
      "fontSize": "{fontSizes.lg}",
      "letterSpacing": "{letterSpacing.tighter}",
      "paragraphSpacing": "{paragraphSpacing.none}"
      "paragraphIndent": "{paragraphIndent.none}"
    },
    "type": "typography"
  }
}
```


import Callout from 'nextra-theme-docs/callout'

<Callout emoji="⚠️">
  Embora os tokens `Font Family` e `Font Weight` possam ser aplicados individualmente a nós de texto, ambos devem ser aplicados simultaneamente para causar uma alteração visual no Figma.
</Callout> 

### Família da Fonte (Font family)

Você pode definir sua família de fontes como um valor único ou também como uma lista separada por vírgulas. O plug-in tentará cada um deles e, se encontrar um que funcione, usará este.

### Peso da Fonte (Font weight)

Pesos de fonte são definidos usando strings como Regular ou Negrito (Bold) e são aplicados em combinação com um token fontFamily (ou como parte de um token de tipografia). 

O Figma não nos permite definir um peso de fonte usando esses números, tivemos que implementar um mapeamento que acerte isso para a maioria das fontes, mas pode ser que esse mapeamento não funcione para o seu caso. 

Você sempre pode usar a string exata que está disponível na escolha da fonte do Figma (por exemplo, família de fontes `Inter` com peso `Bold`).

