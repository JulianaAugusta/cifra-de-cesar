# Cifra de Cesar

Projeto final do sprint 1 do Bootcamp da Laboratoria

Crie uma página web que peça, por meio de um prompt(), uma frase para o usuário e retorne a mesma mensagem criptografada de acordo com o a Cifra de César. Seu programa deve ser capaz de criptografar e descriptografar letras maiúsculas e minúsculas.


----
## Algorítmo
1. Usuário digita sua mensagem no input de texto.
2. Ele escolhe entre as duas opções criptografar ou descriptografar.
3. Ao escolher a opção para Criptografar o programa entra na função Cipher.
 * A função verifica onde aquele caractere se encontra dentro da tabela ASCII.
 * Caso o caractere seja minúsculo ele aplica a fórmula: (((num + 7) % 26) + 65).
 * Caso o caractere seja maiúsculo ele aplica a fórmula: (((num + 7) % 26) + 97).
 * Caso o caractere seja um espaço ele permanece como está.
 * É exibido o resultado na caixa de texto.
4. Ao escolher a opção para Descriptografar o programa entra na função Decipher.
 * A função verifica onde aquele caractere se encontra dentro da tabela ASCII.
 * Caso o caractere seja minúsculo ele aplica a fórmula: (((num + 19) % 26) + 65).
 * Caso o caractere seja maiúsculo ele aplica a fórmula: (((num + 19) % 26) + 97).
 * Caso o caractere seja um espaço ele permanece como está.
 * É exibido o resultado na caixa de texto.
5. Ao clicar no botão de limpar o texto o input é limpo.
---
##Refactory
1. Agora implementei a página em HTML5 e o usuário irá interagir com ela. Tem uma nova aparência e não uso mais o prompt para realizar ações.
2. O código foi melhorado e o algoritmo mudado. Há funcionalidade nos botões.
3. É código vanilla! Todo em JavaScript puro!

---
##Roadmap
1. Implementação de uma cifra que aceite acentuação;