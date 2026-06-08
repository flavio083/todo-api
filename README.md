# 📋 Todo API — Full Stack Task Management

<div align="center">

![Java](https://img.shields.io/badge/Java-21-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-00B039?style=flat-square&logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-316192?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Production-brightgreen?style=flat-square)

**Sistema de Gerenciamento de Tarefas | Full Stack com Backend robusto e Frontend responsivo**

[🚀 Demo Online](#-demo-online) • [📖 Documentação API](#-documentação-da-api) • [🐙 Repositório](https://github.com/flavio083/todo-api) • [🔗 Swagger Interativo](https://todo-api-chfi.onrender.com/swagger-ui/index.html)

</div>

---

## 🎯 Sobre o Projeto

Uma **aplicação completa de gerenciamento de tarefas** desenvolvida com **Java 21** e **Spring Boot 3**, demonstrando boas práticas em arquitetura backend, integração frontend moderna e deploy em ambiente de produção.

O projeto showcasa um **sistema robusto** com:
- Backend RESTful profissional com validação de dados
- Frontend integrado com HTML5, CSS3 e JavaScript puro
- Banco de dados PostgreSQL em produção
- Containerização com Docker
- Deploy em Render com CI/CD

**Ideal para portfólio de desenvolvedor backend Java/Spring Boot!**

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| ✅ **CRUD Completo** | Criar, ler, atualizar e deletar tarefas |
| ✅ **Gerenciamento de Status** | PENDING, IN_PROGRESS, DONE |
| ✅ **API REST** | Endpoints bem estruturados e RESTful |
| ✅ **Frontend Integrado** | Interface responsiva e intuitiva |
| ✅ **Validação de Dados** | Request validation com Bean Validation |
| ✅ **Tratamento de Erros** | Global Exception Handler robusto |
| ✅ **Documentação OpenAPI** | Swagger/OpenAPI 3.0 interativo |
| ✅ **Persistência JPA** | ORM com Spring Data JPA |
| ✅ **CORS Configurado** | Comunicação segura frontend-backend |
| ✅ **Containerizado** | Docker pronto para produção |
| ✅ **Deploy em Produção** | Hospedado no Render |

---

## 🛠 Tecnologias & Stack

### Backend
- **Java 21** — Última versão LTS com suporte estendido
- **Spring Boot 3** — Framework moderno e robusto
- **Spring Data JPA** — ORM e operações com banco de dados
- **Spring Web** — Construção de APIs REST
- **Lombok** — Reduz boilerplate de código
- **Validation API** — Validação de inputs

### Banco de Dados
- **PostgreSQL** — Banco de dados em produção
- **H2 Database** — Banco em memória para testes e desenvolvimento

### Frontend
- **HTML5** — Markup semântico
- **CSS3** — Estilização responsiva
- **JavaScript (Vanilla)** — Lógica frontend sem dependências

### DevOps & Ferramentas
- **Maven** — Gerenciamento de dependências e build
- **Docker** — Containerização da aplicação
- **Render** — Hosting em produção com CI/CD
- **OpenAPI 3.0** — Documentação automática de API
- **Swagger UI** — Interface interativa para testar endpoints

---

## 🚀 Demo Online

| Recurso | Link |
|---------|------|
| 🌐 **Aplicação** | https://todo-api-chfi.onrender.com |
| 📚 **Swagger UI** | https://todo-api-chfi.onrender.com/swagger-ui/index.html |
| 🐙 **Repositório GitHub** | https://github.com/flavio083/todo-api |

---

## 📂 Estrutura do Projeto

```
todo-api/
├── src/
│   ├── main/
│   │   ├── java/com/flaviano/todo/
│   │   │   ├── TodoApiApplication.java           # Classe principal da aplicação
│   │   │   ├── config/
│   │   │   │   └── WebConfig.java                # Configuração CORS
│   │   │   ├── controller/
│   │   │   │   └── TaskController.java           # REST endpoints (GET, POST, PUT, DELETE)
│   │   │   ├── service/
│   │   │   │   └── TaskService.java              # Lógica de negócio
│   │   │   ├── repository/
│   │   │   │   └── TaskRepository.java           # Camada de acesso a dados
│   │   │   ├── entity/
│   │   │   │   └── Task.java                     # Modelo de domínio
│   │   │   ├── dto/
│   │   │   │   └── TaskRequest.java              # Data Transfer Object
│   │   │   ├── enums/
│   │   │   │   └── TaskStatus.java               # Status da tarefa (PENDING, IN_PROGRESS, DONE)
│   │   │   └── exception/
│   │   │       ├── GlobalExceptionHandler.java   # Tratamento centralizado de exceções
│   │   │       └── TaskNotFoundException.java    # Exceção customizada
│   │   └── resources/
│   │       ├── application.yaml                  # Configuração padrão (H2)
│   │       ├── application-prod.yaml             # Configuração produção (PostgreSQL)
│   │       └── static/                           # Frontend integrado
│   │           ├── index.html
│   │           ├── css/style.css
│   │           └── js/script.js
│   └── test/
│       └── java/com/flaviano/todo/
│           └── TodoApiApplicationTests.java      # Testes de integração
├── frontend/                                     # Frontend em desenvolvimento
│   ├── index.html
│   ├── css/style.css
│   └── js/script.js
├── pom.xml                                       # Dependências Maven
├── Dockerfile                                    # Configuração Docker
└── README.md
```

---

## 🔧 Pré-requisitos

Para executar o projeto localmente, você precisa de:

- **Java 21** ou superior
- **Maven 3.9+** ou use o Maven wrapper incluído (`./mvnw`)
- **Git**
- **PostgreSQL 14+** (para ambiente de produção)
- **Docker** (opcional, para containerizar)

---

## 🚀 Guia de Início Rápido

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/flavio083/todo-api.git
cd todo-api
```

### 2️⃣ Compile o Projeto

```bash
# Linux/Mac
./mvnw clean install

# Windows
mvnw.cmd clean install
```

### 3️⃣ Execute a Aplicação

#### Modo Desenvolvimento (H2 em memória)
```bash
./mvnw spring-boot:run
```

A aplicação estará disponível em: **http://localhost:8080**

#### Modo Produção (PostgreSQL)

Configure as variáveis de ambiente:
```bash
export DB_USER=seu_usuario_postgres
export DB_PASSWORD=sua_senha_postgres
```

Então execute:
```bash
./mvnw spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=prod"
```

### 4️⃣ Acesse a Aplicação

- 🌐 Frontend: http://localhost:8080
- 📚 Swagger UI: http://localhost:8080/swagger-ui/index.html
- 📋 API JSON: http://localhost:8080/v3/api-docs

---

## 🐳 Docker

### Construir Imagem

```bash
docker build -t todo-api:latest .
```

### Executar Container

```bash
docker run -p 8080:8080 \
  -e DB_USER=postgres \
  -e DB_PASSWORD=sua_senha \
  -e DB_URL=jdbc:postgresql://seu-host:5432/todo_db \
  todo-api:latest
```

---

## 📖 Documentação da API

A API foi documentada com **OpenAPI 3.0** e está disponível interativamente no **Swagger UI**.

### Endpoints Principais

#### 📋 Listar Todas as Tarefas
```http
GET /api/tasks
```

**Resposta:** Array de tarefas

---

#### 📌 Obter Tarefa por ID
```http
GET /api/tasks/{id}
```

**Parâmetro:**
- `id` (path): ID da tarefa

---

#### ✨ Criar Nova Tarefa
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Estudar Spring Boot",
  "description": "Criar projeto para portfólio",
  "status": "PENDING"
}
```

**Resposta:**
```json
{
  "id": 1,
  "title": "Estudar Spring Boot",
  "description": "Criar projeto para portfólio",
  "status": "PENDING",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

#### ✏️ Atualizar Tarefa
```http
PUT /api/tasks/{id}
Content-Type: application/json

{
  "title": "Estudar Spring Boot e Spring Cloud",
  "status": "IN_PROGRESS"
}
```

---

#### 🗑️ Deletar Tarefa
```http
DELETE /api/tasks/{id}
```

---

### Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | OK — Requisição bem-sucedida |
| 201 | Created — Tarefa criada |
| 400 | Bad Request — Dados inválidos |
| 404 | Not Found — Tarefa não encontrada |
| 500 | Server Error — Erro interno |

---

## ⚙️ Configuração

### Desenvolvimento (H2)

```yaml
# src/main/resources/application.yaml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
    hibernate:
      ddl-auto: create-drop
```

### Produção (PostgreSQL)

```yaml
# src/main/resources/application-prod.yaml
spring:
  datasource:
    url: jdbc:postgresql://${DB_HOST}:5432/todo_db
    username: ${DB_USER}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  jpa:
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    hibernate:
      ddl-auto: validate
  web:
    cors:
      allowed-origins: "*"
      allowed-methods: "*"
```

---

## 🧪 Testes

Execute os testes de integração:

```bash
./mvnw test
```

---

## 📊 Arquitetura

```
┌─────────────────────────────────────────┐
│         Frontend (HTML/CSS/JS)          │
├─────────────────────────────────────────┤
│         REST API (Spring Boot)          │
│  ┌─────────────────────────────────┐    │
│  │    TaskController               │    │
│  │    TaskService                  │    │
│  │    TaskRepository (Spring Data) │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│      PostgreSQL / H2 Database           │
└─────────────────────────────────────────┘
```

### Fluxo de Requisição

1. **Frontend** → Envia requisição HTTP
2. **Controller** → Recebe e valida dados
3. **Service** → Implementa lógica de negócio
4. **Repository** → Acessa base de dados
5. **Database** → Persiste/Recupera dados
6. **Response** → Retorna ao frontend

---

## 🎓 Conceitos & Padrões Implementados

- ✅ **RESTful API Design** — Convenções REST adequadas
- ✅ **Separation of Concerns** — Camadas bem definidas (Controller → Service → Repository)
- ✅ **Dependency Injection** — Spring IoC container
- ✅ **Exception Handling** — Global exception handler centralizado
- ✅ **Bean Validation** — Validação de inputs com anotações
- ✅ **CORS Configuration** — Segurança cross-origin
- ✅ **JPA/Hibernate** — ORM profissional
- ✅ **DTO Pattern** — Data Transfer Objects
- ✅ **Configuration Profiles** — Ambientes dev/prod separados

---

## 💡 Destaques do Portfólio

Este projeto demonstra:

- 🎯 **Backend Java/Spring Boot profissional** com boas práticas
- 🔗 **Integração Frontend-Backend** funcional e responsiva
- 🚀 **Deploy em Produção** com sucesso no Render
- 📚 **Documentação API** com OpenAPI/Swagger
- 🐳 **Containerização Docker** pronta para produção
- 💾 **Banco PostgreSQL** em ambiente profissional
- ✅ **Testes de Integração** inclusos
- 🔐 **Tratamento de Erros** robusto e centralizado

---

## 🔗 Links Importantes

| Link | Descrição |
|------|-----------|
| [🌐 Aplicação Online](https://todo-api-chfi.onrender.com) | Acesse a aplicação em produção |
| [📚 Swagger Interativo](https://todo-api-chfi.onrender.com/swagger-ui/index.html) | Teste os endpoints da API |
| [🐙 GitHub](https://github.com/flavio083/todo-api) | Código fonte completo |
| [📄 Licença MIT](LICENSE) | Detalhes da licença |

---

## 👨‍💻 Autor

<div align="center">

**Flaviano Aguiar Silva Filho**

Desenvolvedor Backend | Java | Spring Boot | PostgreSQL

[🐙 GitHub](https://github.com/flavio083) • [💼 LinkedIn](https://www.linkedin.com/in/flaviano-aguiar-173a93343) • [🌐 Portfolio](https://github.com/flavio083)

</div>

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!

Made with ❤️ by Flaviano

</div>