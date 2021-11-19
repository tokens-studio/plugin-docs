# Aplicando tokens

Existem duas maneiras de aplicar tokens à sua seleção:

### Comportamento padrão (botão esquerdo)
Quando você clica com o botão esquerdo em um token, ele é colocado em sua seleção (várias camadas selecionadas são possíveis!). Para certos tokens, determinamos os padrões - como em `Colors`, onde assumimos que você deseja aplicar `Fill`.

### Especificando o que aplicar (clique com o botão direito)
Você pode clicar com o botão direito do mouse nos tokens para especificar qual propriedade deve ser definida, como em `Spacing` as propriedades `Horizontal Spacing`, `Vertical Spacing` ou `Gap` individualmente.

### Control where to apply changes
Você pode controlar quais partes do seu design são atualizadas utilizando o seletor Aplicar no canto inferior esquerdo do plugin. 

Você pode escolher entre:
- Aplicar à página (a página atualmente selecionada será atualizada)
- Aplicar ao documento (todas as páginas são atualizadas, possivelmente lento)
- Aplicar à seleção (apenas os nós selecionados atualmente serão atualizados)

Além disso, oferecemos a você mais controle sobre o que acontece depois que você altera um token. Ao definir `Update on change` para false, o plugin irá requerer que você pressione manualmente o botão `Update` para enviar alterações para sua página / documento / seleção.