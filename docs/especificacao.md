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

O sistema também contará com uma seção de profissionais, na qual serão apresentados perfis e informações de especialistas que oferecem serviços de apoio, como orientação psicológica, jurídica e cuidados infantis. Os profissionais poderão receber avaliações de seus serviços, que somente poderão ser realizadas por usuárias que declarem ter utilizado o atendimento, por meio de mecanismo de autodeclaração.

A comunicação entre usuárias e profissionais ocorrerá por meios externos à plataforma, como WhatsApp e e-mail, por meio de botões de redirecionamento.

### 3.2.2 Missão do produto
Proporcionar um ambiente digital que ofereça apoio e suporte às mães solo em suas rotinas pessoais e profissionais, facilitando o acesso a informações e a profissionais de áreas como orientação psicológica, jurídica e cuidados infantis. O sistema tem como missão tornar esses serviços mais acessíveis e organizados, permitindo que as usuárias encontrem suporte de forma simples, segura e confiável. Além disso, o desenvolvimento da solução segue princípios de Design Centrado no Usuário, buscando compreender as necessidades reais das usuárias e oferecer uma experiência de uso intuitiva, acessível e alinhada às suas demandas.

### 3.2.3 Limites do produto
O sistema de apoio a mães solo no mercado de trabalho não fornece serviços diretos de atendimento profissional, como consultas psicológicas, jurídicas ou contratação de babás e creches. A plataforma apenas permite que as usuárias localizem profissionais próximos para apoio, visualizem seus perfis e avaliações. O sistema não possui chat interno ou troca de mensagens diretas dentro da plataforma.

O sistema também não realiza pagamentos, agendamentos de serviços ou intermediação financeira entre as mães e os profissionais cadastrados. Além disso, a plataforma não realiza verificação ou certificação dos profissionais cadastrados.

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
| RF1 | Gerenciar Cadastro de Usuários | Processamento de inclusão de usuários do tipo mãe ou prestador de serviço |
| RF2 | Realizar Autenticação de Usuários | Processamento de login dos usuários na aplicação |
| RF3 |	Buscar Prestadores de Serviço	| Processamento de busca por prestadores cadastrados |
| RF4 | Filtrar Busca de Serviços	| Processamento de busca por localização, especialidade e outros filtros |
| RF5	| Visualizar Perfis de Prestadores |	Exibição dos dados e informações dos prestadores de serviço |
| RF6 | Gerenciar Perfis de Usuários	| Processamento de edição de perfis de mães e prestadores |
| RF7 | Avaliar Serviços	| Processamento de avaliações e comentários sobre prestadores |
| RF8 | Gerenciar Publicações no Feed | Processamento de criação, visualização e interação com publicações |
| RF9 | Gerenciar Interação entre Usuárias | Permitir comentários e interação nas publicações |
| RF10 | Permitir Avaliações Confiáveis | A aplicação deve permitir avaliações de serviços apenas por usuárias que declarem ter utilizado o atendimento |
| RF11 | Gerenciar Interação entre Usuárias | Permitir comentários e interação nas publicações |


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O sistema deve garantir a segurança e privacidade das informações das usuárias. |
| RNF2 | A interface deve ser simples e de fácil utilização. |
| RNF3 | A aplicação deve possuir um design atraente e agradável ao usuário.|
| RNF4 | A aplicação deve ser responsiva. |
| RNF5 | A aplicação deve funcionar em diferentes dispositivos. |



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

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

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
