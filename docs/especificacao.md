# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

A presente seção tem como objetivo apresentar a documentação de requisitos do sistema proposto, desenvolvido no contexto do projeto voltado ao apoio de mães solo no mercado de trabalho. O sistema consiste em uma plataforma web que busca centralizar informações e serviços direcionados a esse público, facilitando o acesso a recursos que auxiliem na inserção e permanência dessas mulheres no ambiente profissional.

A plataforma foi concebida como um hub digital que conecta mães solo a profissionais e serviços de apoio, como orientação psicológica, jurídica e cuidados infantis. Dessa forma, o sistema busca contribuir para a redução de barreiras enfrentadas por essas mulheres, promovendo maior autonomia, segurança e acesso a recursos que auxiliem no equilíbrio entre as responsabilidades profissionais e familiares.

## 3.1 Objetivos deste documento

O presente documento tem como objetivo descrever e especificar as necessidades das usuárias do sistema proposto no projeto Mães em Foco, que devem ser atendidas pela plataforma web desenvolvida para apoiar mães solo no acesso a informações e serviços de suporte. O sistema busca facilitar o contato com profissionais de áreas como orientação psicológica, jurídica e cuidados infantis, contribuindo para reduzir dificuldades enfrentadas por essas mulheres em sua rotina e em sua inserção no mercado de trabalho.

Além disso, este documento tem como objetivo apresentar de forma clara os requisitos do sistema, definindo as funcionalidades esperadas e as características necessárias para que a solução atenda às necessidades das usuárias. O desenvolvimento do sistema segue princípios de boas práticas de design e os fundamentos do Design Centrado no Usuário, buscando garantir uma experiência de uso acessível, intuitiva e alinhada às reais necessidades do público-alvo

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Mães em Foco, um sistema web desenvolvido para apoiar mães solo no acesso a informações e serviços de suporte que possam auxiliá-las em sua rotina e nas demandas relacionadas à maternidade solo, contribuindo também para sua inserção e permanência no mercado de trabalho.

Entre os principais componentes do sistema está o feed de publicações, onde as usuárias podem criar, visualizar e interagir com conteúdos, compartilhando experiências, informações e conteúdos relevantes para outras mães. 

O sistema também contará com uma seção dedicada a profissionais, na qual serão apresentados perfis com informações de especialistas que oferecem serviços de apoio, como orientação psicológica, jurídica, atendimento médico e serviços de cuidado infantil, incluindo babás e creches.

Para se cadastrar na plataforma, o profissional deverá enviar documentação comprobatória de sua habilitação profissional, conforme o órgão regulamentador da respectiva área, por exemplo, advogados deverão informar registro na OAB, psicólogos no CRP, médicos no CRM, entre outros. Essas informações passarão por um processo de validação antes da aprovação do perfil.

Além disso, os profissionais poderão receber avaliações de seus serviços, as quais somente poderão ser realizadas por usuárias que comprovem ter utilizado o atendimento, por meio de um sistema de verificação (certificação de reviews).

A comunicação entre usuárias e profissionais ocorrerá por meios externos à plataforma, como WhatsApp e e-mail, por meio de botões de redirecionamento.

### 3.2.2 Missão do produto
Proporcionar um ambiente digital que ofereça apoio e suporte às mães solo em suas rotinas pessoais e profissionais, facilitando o acesso a informações e a profissionais de áreas como orientação psicológica, jurídica e cuidados infantis. O sistema tem como missão tornar esses serviços mais acessíveis e organizados, permitindo que as usuárias encontrem suporte de forma simples, segura e confiável. Além disso, o desenvolvimento da solução segue princípios de Design Centrado no Usuário, buscando compreender as necessidades reais das usuárias e oferecer uma experiência de uso intuitiva, acessível e alinhada às suas demandas.

### 3.2.3 Limites do produto
O sistema de apoio a mães solo no mercado de trabalho não fornece serviços diretos de atendimento profissional, como consultas psicológicas, jurídicas ou contratação de babás e creches. A plataforma apenas permite que as usuárias localizem profissionais próximos para apoio, visualizem seus perfis e avaliações. O sistema não possui chat interno ou troca de mensagens diretas dentro da plataforma.

O sistema também não realiza pagamentos, agendamentos de serviços ou intermediação financeira entre as mães e os profissionais cadastrados. 

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	|Facilidade no cadastro de perfis de mães solo e profissionais|	Essencial |
|2 |Facilidade na busca e localização de profissionais de apoio próximos | Essencial | 
|3 | Fortalecimento da comunicação e troca de experiências entre mães solo por meio do feed | Recomendável | 
|4	| Segurança no armazenamento de dados das usuárias e profissionais	|Essencial | 
|5	| Acesso centralizado a informações e serviços de apoio	|Essencial | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Cadastro de Usuários | Permitir inclusão de usuários do tipo mãe ou prestador de serviço |
| RF2 | Realizar Autenticação de Usuários | Permitir login dos usuários na aplicação |
| RF3 |	Buscar Prestadores de Serviço	| Permitir busca por prestadores cadastrados |
| RF4 | Filtrar Busca de Serviços	| Permitir busca por localização, especialidade e outros filtros |
| RF5	| Visualizar Perfis de Prestadores |	Permitir exibição dos dados e informações dos prestadores de serviço |
| RF6 | Gerenciar Perfis de Usuários	| Permitir edição de perfis de mães e prestadores |
| RF7 | Avaliar Serviços	| Permitir avaliações e comentários sobre prestadores |
| RF8 | Garantir Avaliações Confiáveis   | Permitir a avaliação pela certificadora de reviews |
| RF9 | Gerenciar Interação entre Usuárias | Permitir comentários e interação nas publicações |
| RF10 | Gerenciar Publicações no Feed | Permitir criação, visualização e interação com publicações |
| RF11 | Redirecionar contato para canais externos | Permitir acesso a canais externos de comunicação com profissionais |


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O sistema deve garantir a segurança e privacidade das informações das usuárias. |
| RNF2 | A interface deve ser simples e de fácil utilização. |
| RNF3 | A aplicação deve possuir um design atraente e agradável ao usuário.|
| RNF4 | A aplicação deve ser responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos. |
| RNF5 | A interface deve seguir diretrizes de acessibilidade, facilitando o uso por diferentes perfis de usuárias. |



### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Mães Solo |	Usuária da plataforma que pode criar perfil, participar do fórum, fazer publicações, interagir com outras mães e buscar profissionais de apoio próximos.|
| Advogado |	Profissional que pode criar um perfil para oferecer orientação e serviços jurídicos às mães solo. |
| Psicólogo |	Profissional que pode criar um perfil para oferecer apoio psicológico às mães solo. |
| Babá |	Profissional que pode cadastrar seus serviços para auxiliar no cuidado das crianças.|
| Creche |	Instituição que pode cadastrar seu perfil para que mães solo encontrem opções de cuidado infantil próximas.|
| ... |	... |	... |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
O diagrama de casos de uso apresenta as principais interações entre os usuários do sistema e suas funcionalidades. Nele, é possível identificar as ações que podem ser realizadas pelas mães solo e pelos prestadores de serviço dentro da plataforma.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![caso de uso](img/Diagrama_caso_de_uso_maes.drawio.png)
 
### 3.4.2 Descrições de Casos de Uso

#### Cadastrar Profissional (CSU01)

Sumário: O profissional parceiro realiza seu cadastro na plataforma, informando dados pessoais e profissionais, incluindo documentação comprobatória. O administrador da plataforma valida as informações e aprova ou rejeita o cadastro.

Ator Primário: Profissional Parceiro.

Ator Secundário: Administrador da Plataforma.

Pré-condições: O profissional não deve possuir cadastro prévio na plataforma.

Fluxo Principal:

1)  O profissional acessa a funcionalidade de cadastro.
2)  O sistema solicita o preenchimento dos dados pessoais e profissionais.
3)  O profissional informa os dados e envia a documentação comprobatória (ex: OAB, CRP, CRM).
4)  O sistema valida o preenchimento dos campos obrigatórios.
5)  Se os dados forem válidos, o sistema registra o cadastro com status “pendente de aprovação”.
6)  O administrador acessa a lista de cadastros pendentes.
7)  O administrador analisa a documentação enviada.
8)  O administrador aprova o cadastro.
9)  O sistema atualiza o status do profissional para “ativo” e confirma o cadastro.

Fluxo Alternativo (4): Dados inválidos

a) O sistema identifica inconsistências ou ausência de campos obrigatórios.<br>
b) O sistema informa os erros ao profissional.<br>
c) O profissional corrige os dados.<br>
d) O fluxo retorna ao passo 3.<br>

Fluxo Alternativo (7): Reprovação do cadastro

a) O administrador identifica inconsistências ou documentação inválida.<br>
b) O administrador rejeita o cadastro.<br>
c) O sistema atualiza o status para “rejeitado”.<br>
d) O sistema notifica o profissional para correção ou novo envio.<br>

Pós-condições: O profissional é cadastrado na plataforma com status “ativo” (aprovado) ou “rejeitado” (pendente de correção).

#### Gerenciar Perfil (CSU02)

Sumário: A usuária da plataforma e o profissional parceiro realizam a gestão de seus perfis, incluindo cadastro, visualização e atualização de informações pessoais e profissionais.

Ator Primário: Usuária da Plataforma, Profissional Parceiro.

Pré-condições: O usuário (usuária ou profissional) deve possuir cadastro na plataforma.
O usuário deve estar autenticado no sistema.

Fluxo Principal:

1) 	O usuário acessa a funcionalidade de gerenciamento de perfil.
2) 	O sistema apresenta os dados atuais editáveis do perfil.
3) 	O usuário realiza as alterações desejadas.
4)  Se os dados forem válidos, o sistema atualiza o perfil e confirma a operação.
5) 	O usuário pode continuar editando, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (4): Dados inválidos

a) O sistema identifica inconsistências ou campos obrigatórios não preenchidos.<br>
b) O sistema informa o erro ao usuário.<br>
c) O usuário corrige os dados.<br>
d) O fluxo retorna ao passo 3.<br>

Pós-condições: Os dados do perfil do usuário ou profissional foram atualizados com sucesso ou mantidos sem alteração.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
