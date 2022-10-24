# API - Personal Budget

---

### Description

---

<p>Api developed in nodejs with typescript, the project was made to perform the personal management of your accounts.</p>

---

# Tables to system

---

### Table to Pessoa
- id             - id de criação
- name           - Nome da pessoa
- birthDate      - Data de nascimento
- gender         - Genêro (Masculino ou Feminino)
- email          - E-mail da pessoa
- status         - Status (Ativo ou Inativo)

---
### Table to Income
- id             - id de criação
- idPerson       - id da pessoa vinculada a renda
- description    - Descrição da renda
- incomeDate     - Data de referência da renda
- value          - Valor da renda
- createdAt      - Data de criação
- updatedAt      - Data de atualização

---
### Table to movement
 - id             - Id de criação
 - idPerson       - Id da pessoa vinculada ao movimento
 - description    - Descrição do movimento
 - classification - Tipo e classificação(Lazer, Saúde, Mercado, etc...)
 - typeOfCost     - Tipo de custo (Renda fixa ou variável)
 - typeOfPayment  - Tipo de pagamento (Dinheiro, cartão ou outros)
 - movementDate   - Data de movimentação do custo
 - value          - Valor do custo
 - status         - Status (Em aberto ou Finalizado)
 - createdAt      - Data de criação
 - updatedAt      - Data de atualização
 - ---