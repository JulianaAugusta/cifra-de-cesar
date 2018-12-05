# Cifra de Cesar

Projeto final do sprint 1 do Bootcamp da Laboratoria

Crie uma página web que peça, por meio de um prompt(), uma frase para o usuário e retorne a mesma mensagem criptografada de acordo com o a Cifra de César. Seu programa deve ser capaz de criptografar e descriptografar letras maiúsculas e minúsculas.


----
## Algorítmo
1. Usuário recebe uma mensagem com as opções 1-Criptografar 2-Descriptografar 3-Sair.
2. Ao escolher a opção para Criptografar o programa entra na função Cipher.
 * A função verifica onde aquele caractere se encontra dentro da tabela ASCII.
 * Caso o caractere seja minúsculo ele aplica a fórmula: (((num + 7) % 26) + 65).
 * Caso o caractere seja maiúsculo ele aplica a fórmula: (((num + 7) % 26) + 97).
 * Caso o caractere seja um espaço ele permanece como está.
3. Ao escolher a opção para Descriptografar o programa entra na função Decipher.
 * A função verifica onde aquele caractere se encontra dentro da tabela ASCII.
 * Caso o caractere seja minúsculo ele aplica a fórmula: (((num + 19) % 26) + 65).
 * Caso o caractere seja maiúsculo ele aplica a fórmula: (((num + 19) % 26) + 97).
 * Caso o caractere seja um espaço ele permanece como está.
4. Ao escolher a opção sair, finaliza o programa.
