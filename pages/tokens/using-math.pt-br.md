# Usando matemática

Muitas vezes, pode fazer sentido construir seus tokens com uma escala em mente, como uma escala de tipografia ou uma escala de espaçamento. O que isso significa é que um valor usa outro valore e faz cálculos com ele.

Por exemplo, você pode querer que seu token `spacing.sm` faça referência ao token `spacing.xs`, porém multiplique seu valor por 2. Para fazer isso, você pode escrever o seguinte como o valor do token: `$spacing.xs * 2` (observe o espaço entre o token e o valor).

Você também pode multiplicar por outro token: `$spacing.xs * $spacing.scale`!

Onde `spacing.scale` seria um token cujo valor poderia ser, por exemplo, 2.

Outros casos de uso em que isso é útil podem ser tipografia com tamanhos de fonte referenciando o token anterior e multiplicar isso com uma escala de tipo de, por exemplo, 1,25.

### Adding units
O plugin não pode calcular se um dos tokens tinha a unidade incluída (por exemplo, `spacing.sm = 2rem`). 

Nesse caso, você pode decidir remover a unidade ou anexá-la após a operação (por exemplo, `{spacing.xs} * {spacing.scale}rem`).