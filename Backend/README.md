# Volunteer_Connect

## Backend

### Project Information

![JDK version](https://img.shields.io/badge/JDK-17-green.svg)
![lombok](https://img.shields.io/badge/lombok-1.18.32-blue.svg)
![mysql-connector-j](https://img.shields.io/badge/MySQL%20Connector-8.3.0-orange.svg)
![java-jwt](https://img.shields.io/badge/Java%20JWT-4.4.0-lightgrey.svg)
![jaxb-api](https://img.shields.io/badge/Jaxb%20api-2.3.1-red.svg)

### Getting Started

1. Install dependencies:
```bash
cd backend
./mvnw install
```

2. Set up database:
- Using MySQL database
- Create database named "pbl5_volunteer_connect_pj" in PhpAdmin or mysql workbench
- Export file "pbl5_volunteer_connect_pj.sql" in `Backend/sql`

3. Set up your environment variables:
- Create your `application-"your name".properties` file in the `src/main/resources` directory.
- Add the required environment variables (e.g., database connection settings, JWT secrets).
- Change spring active args variables in `.vscode/launch.json` to "args": "--spring.profiles.active=your name" 

4. Start the Spring Boot application:
```bash
./mvnw spring-boot:run
```