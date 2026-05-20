# 📋 Todo API — REST Edition

A RESTful API for task management developed with Java and Spring Boot, designed to provide a complete CRUD solution with modern API documentation and database support.

## 🚀 Features

✅ Create, read, update, and delete tasks  
✅ Task status management (PENDING, IN_PROGRESS, COMPLETED)  
✅ Exception handling with global error management  
✅ Input validation for request data  
✅ OpenAPI/Swagger documentation  
✅ Database persistence with JPA  
✅ Modular architecture with separation of concerns  
✅ Docker support for containerization  

## 🛠 Technologies

- **Java 21** — Latest LTS version
- **Spring Boot 3.5.14** — Modern framework
- **Spring Data JPA** — ORM and database operations
- **PostgreSQL** — Primary database (production)
- **H2 Database** — In-memory database (development/testing)
- **OpenAPI 3.0** — API documentation with Swagger UI
- **Lombok** — Reduce boilerplate code
- **Maven** — Build automation
- **Docker** — Containerization
- **Git** — Version control

## 📂 Project Structure

```
todo-api/
├── src/
│   ├── main/
│   │   ├── java/com/flaviano/todo/
│   │   │   ├── TodoApiApplication.java          # Main application entry point
│   │   │   ├── controller/
│   │   │   │   └── TaskController.java           # REST endpoints
│   │   │   ├── service/
│   │   │   │   └── TaskService.java              # Business logic
│   │   │   ├── repository/
│   │   │   │   └── TaskRepository.java           # Data access layer
│   │   │   ├── entity/
│   │   │   │   └── Task.java                     # Domain model
│   │   │   ├── dto/
│   │   │   │   └── TaskRequest.java              # Request/Response DTO
│   │   │   ├── enums/
│   │   │   │   └── TaskStatus.java               # Task status enum
│   │   │   └── exception/
│   │   │       ├── GlobalExceptionHandler.java   # Exception handling
│   │   │       └── TaskNotFoundException.java    # Custom exception
│   │   └── resources/
│   │       ├── application.yaml                  # Default configuration
│   │       └── application-prod.yaml             # Production configuration
│   └── test/
│       └── java/com/flaviano/todo/
│           └── TodoApiApplicationTests.java     # Integration tests
├── pom.xml                                       # Maven dependencies
├── Dockerfile                                    # Docker configuration
└── README.md
```

## ⚙️ Configuration

### Development (H2 Database)
The application uses **H2 in-memory database** by default for development:

```yaml
# application.yaml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
```

### Production (PostgreSQL)
For production, use the `application-prod.yaml` profile:

```yaml
# application-prod.yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/todo_db
    username: ${DB_USER}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  jpa:
    database-platform: org.hibernate.dialect.PostgreSQLDialect
```

**Environment Variables:**
- `DB_USER` — PostgreSQL username
- `DB_PASSWORD` — PostgreSQL password

## 🔧 Installation

### Prerequisites
- **Java 21** or higher
- **Maven 3.9+**
- **Git**
- **PostgreSQL** (for production)

### Clone Repository
```bash
git clone https://github.com/flavio083/todo-api.git
cd todo-api
```

### Build Project
```bash
./mvnw clean install
```

On Windows:
```bash
mvnw.cmd clean install
```

## ▶️ Running

### Development Mode (H2 Database)
```bash
./mvnw spring-boot:run
```

The application will start on `http://localhost:8080`

### Production Mode (PostgreSQL)
```bash
./mvnw spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=prod"
```

### Using Docker
```bash
# Build Docker image
docker build -t todo-api:latest .

# Run container
docker run -p 8080:8080 -e DB_USER=postgres -e DB_PASSWORD=yourpassword todo-api:latest
```

## 📖 API Documentation

Once the application is running, access the interactive API documentation:

- **Swagger UI:** http://localhost:8080/swagger-ui.html
- **OpenAPI JSON:** http://localhost:8080/v3/api-docs

### Example Endpoints

**Create Task:**
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Learn Spring Boot",
  "description": "Master RESTful APIs",
  "status": "PENDING"
}
```

**List All Tasks:**
```bash
GET /api/tasks
```

**Get Task by ID:**
```bash
GET /api/tasks/{id}
```

**Update Task:**
```bash
PUT /api/tasks/{id}
Content-Type: application/json

{
  "title": "Updated Title",
  "status": "IN_PROGRESS"
}
```

**Delete Task:**
```bash
DELETE /api/tasks/{id}
```

## 🧪 Running Tests

```bash
./mvnw test
```

## 🎯 Learning Outcomes

This project helped me improve in:

- **Spring Boot Framework** — Building RESTful APIs
- **Spring Data JPA** — ORM and database integration
- **Exception Handling** — Global error management
- **API Documentation** — OpenAPI/Swagger implementation
- **Database Design** — Entity relationships and persistence
- **Docker** — Application containerization
- **Maven** — Dependency management and build automation
- **Git Workflow** — Version control best practices

## 👨‍💻 Author

**Flaviano Aguiar Silva Filho**

- 🐙 GitHub: https://github.com/flavio083
- 💼 LinkedIn: https://www.linkedin.com/in/flaviano-aguiar-173a93343

## 📄 License

This project is open source and available under the MIT License.