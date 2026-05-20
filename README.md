✅ Todo API — Spring Boot REST API

A task management REST API developed with Java and Spring Boot, featuring full CRUD operations, PostgreSQL integration, exception handling, and cloud deployment with Render.

🚀 Features

✅ Create tasks
✅ List all tasks
✅ Search task by ID
✅ Update tasks
✅ Delete tasks
✅ Task status management
✅ DTO validation
✅ Global exception handling
✅ PostgreSQL integration
✅ Swagger/OpenAPI documentation
✅ Cloud deployment with Render

🛠 Technologies
Java 21
Spring Boot 3
Spring Data JPA
PostgreSQL
Maven
Swagger / OpenAPI
Docker
Render
Git & GitHub

📂 Project Structure
todo-api/
│
├── src/
│   ├── main/
│   │   ├── java/com/flaviano/todo/
│   │   │   ├── controller/
│   │   │   ├── dto/
│   │   │   ├── entity/
│   │   │   ├── enums/
│   │   │   ├── exception/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── TodoApiApplication.java
│   │   │
│   │   └── resources/
│   │       ├── application.yaml
│   │       └── application-prod.yaml
│   │
│   └── test/
│
├── Dockerfile
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md

⚙️ Environment Variables

Configure the following environment variables:

DB_URL=jdbc:postgresql://host:5432/database
DB_USERNAME=your_username
DB_PASSWORD=your_password
SPRING_PROFILES_ACTIVE=prod

🗄 Database Configuration

Example PostgreSQL configuration:

spring:
  datasource:
    url: ${DB_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver

  jpa:
    hibernate:
      ddl-auto: update

    open-in-view: false

🔧 Installation

Clone repository:

git clone https://github.com/flavio083/todo-api.git

Enter project folder:

cd todo-api

Run the project:

./mvnw spring-boot:run

Windows:

mvnw.cmd spring-boot:run

▶️ API Documentation

Swagger UI:

http://localhost:8080/swagger-ui.html

Production:

https://todo-api-chfi.onrender.com/swagger-ui.html

☁️ Deployment

The API is deployed on Render using:

Docker
PostgreSQL database
Environment variables
Spring Boot production profile

🎯 Learning Outcomes

This project helped me improve in:

REST API development
Spring Boot architecture
CRUD operations
DTO validation
Exception handling
Database integration with PostgreSQL
Cloud deployment
Docker basics
Git & GitHub workflow

👨‍💻 Author

Flaviano Aguiar Silva Filho

🐙 GitHub: flavio083 GitHub

💼 LinkedIn: Flaviano Aguiar LinkedIn