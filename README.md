# Develcode Challenge Api

<blockquote>

## Ferramentas necessárias:


- `Node 14.15`



## Primeiros passos:



 - `npm install` | para instalação de dependências


 
  -  `npm run start:dev` | para rodar a aplicação em modo de atualização em tempo real
  
    
 

# Rotas

- <span>Sendo **{{server}}** = http://localhost:3000</span>
  
  **<h2>{{server}}/user/create</h2>**

  Essa rota é responsável pela criação de um usuário e retorna os dados salvos (exceto a senha).

  A rota exige obrigatoriamente, o envio de todos os dados abaixo no body da requisição:

    - `username: string`
    - `password: string`
    - `name string`
    - `birthDate: string`
    - `photo: string` (ainda em implementação)

  
  **<h2>{{server}}/auth/login</h2>**

  Essa rota é responsável pela autenticação de um usuário e retorna o access_token (JWT), responsável por garantir acesso as outras rotas.

  A rota exige obrigatoriamente, o envio de todos os dados abaixo no body da requisição:

    - `username: string`
    - `password: string`


  **<h2>{{server}}/user/:id</h2>**

  Essa rota é responsável pela obtenção dos dados de um usuário e retorna os dados salvos (exceto a senha).

  A rota exige obrigatoriamente, o envio de todos os dados abaixo no header da requisição:

    - `Authorization: Bearer {{access_token}}`


  **<h2>{{server}}/users</h2>**

  Essa rota é responsável por retornar os dados de todos os usuários cadastrados (exceto a senha).

  A rota exige obrigatoriamente, o envio de todos os dados abaixo no header da requisição:

    - `Authorization: Bearer {{access_token}}`


  **<h2>{{server}}/users/update/:id</h2>**

  Essa rota é responsável por atualizar os dados de um usuário.

  A rota exige obrigatoriamente, o envio de todos os dados abaixo no header da requisição:

    - `Authorization: Bearer {{access_token}}`
  
  A rota exige obrigatoriamente, o envio de todos os dados abaixo no body da requisição:

  - `username: string`
  - `password: string`
  - `name string`
  - `birthDate: string`
  - `photo: string` (ainda em implementação)

  
  **<h2>{{server}}/users/delete/:id</h2>**

  Essa rota é responsável por deletar um usuário.

  A rota exige obrigatoriamente, o envio de todos os dados abaixo no header da requisição:

    - `Authorization: Bearer {{access_token}}`

  </blockquote>

  

 
