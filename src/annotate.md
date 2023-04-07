## - Aprendendo como fazer um crud com o solid

## 1 - Perceba que voce pode misturar javascript com typescript , então se voce quiser usar o nodemon como compilador , tudo que voce tem que fazer é transformar o server.ts em server.js e em seguida executar o comando de rodar o servidor com o nodemon, e importar o app que está com o express dentro do server.js

## 2 - Este principio ele é sempre orientado e construido a base de classes e contructor, a fim de deixar o codigo mais arrumado e estruturado

## 3 - S => Single responsibility(Fazer um bela divisão de responsabilidades entre os elementos)

## 4 - L => Liskov substitutiion principle (Melhoria de um sistema de uploads entra várias plataformas)

## 5 - D => Dependency inversion principle (As classes que realizam nossas ações como os useCases e controllers elas não devem depender de implementações , elas devem depender de interfaces, é como a gente vai tipar uma classe )

## 6 - A gente após instalar a bibilioteca a gente precisa instalar as tipagens de cada bibilioteca, só assim para que a gente consiga o autoComplete das bibiliotecas

## 7 - A pasta models diz respeito a pasta entities , tem a mesma funcionalidade => (A gente começa a perceber que as entidades elas se diferem um pouco do model , porque não necessariamente ela está envolvida com uma tabela no banco de dados)

## 8 - na minha entidade por exemplo vai estar , o model da tabela de usuários, tenho que possuir um controller um router e um service para cada tabela, em prol de deixar o codigo muito mais organizado

## 9 - As pastas repositories da nossa aplicação são classes especificas para a gente fazer a comunicação das funcionalidades da aplicação com o nosso banco de dados, a gente tem que entender onde vai ficar armazenada as funcionalidades , as regras de negocio o que o nosso usuário poderá fazer na nossa aplicação

## 10 - Ou seja , essa regra de negocio vai para dentro de uma página chamada useCases, por convenção(São as ações que um determinado usuário pode realizar na nossa aplicação , é o que basicamente vai dentro de uma pasta useCases)

## 11 - A pasta provider é exatemente igual a pasta repositories, mas eu utilizo ela quando vou me comunicar com alguma api externa por assim dizer, ai a repositories somente caso eu vá fazer alguma função que vá se comunicar com o banco de dados.

## 12 -
