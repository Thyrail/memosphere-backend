# 🌟 MemoSphere Backend

The **MemoSphere Backend** is a server-side application built with **NestJS**. It provides APIs for managing diaries, authentication, and integrating **OpenAI** capabilities such as chat completions, image generation, and text-to-speech. This backend is designed to support the **MemoSphere application**, with additional updates and features planned for the future.

**MemoSphere Frontend** is still under development!

## 🚀 Coming Soon: One-Command Deployment
I'm working on delivering a fully functional application that can be deployed effortlessly using a single **docker-compose.yml** file. Here's what you can expect:

- **Quick Start:** Copy the provided docker-compose.yml file to your server.
- **Effortless Setup:** Run docker compose up -d to pull and launch the entire application, including the backend and frontend.
- **Fully Integrated:** The application will be ready to use, with all services configured and running seamlessly.

Stay tuned for the official release and Docker Hub integration!

## 📜 Features

- **User Authentication**: Login and role-based access control (Admin and User roles).
- **Diary Management**: Create, view, and manage diary entries.
- **OpenAI Integration**:
  - Chat completions.
  - Image generation.
  - Text-to-speech conversion.
- **Swagger API Documentation**: Interactive API documentation available in non-production environments.
- **Role-Based Permissions**: Admins have extended permissions for managing users and entries.

## 📦 Installation

### ✅ Prerequisites

- Node.js (v16 or later).
- Docker and Docker Compose.
- PNPM (used as the package manager).

### ⬇️ Steps

1. Clone the repository:

```bash
git clone https://github.com/your-repo/memosphere-backend.git
cd memosphere-backend
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables: Create a **.env** file in the root directory and configure the following variables:

```env
PORT=3000
MONGO_URI=mongodb://mongo:27017/memosphere-db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
ADMIN_USERNAME=admin
ADMIN_PASSWORD=securepassword
SWAGGER_USER=swaggeruser
SWAGGER_PASSWORD=swaggerpassword
OPENAI_API_KEY=your_openai_api_key
```
4. Start the application in development mode:
```bash
pnpm start:dev
```

5. Alternatively, start using **Docker**:
```bash
docker compose up -d

# alternative

docker compose up -d --build
```

## 💾 API Documentation

### The Swagger API documentation is available at:

`http://localhost:3000/api`

Use the credentials defined in the .env file (**SWAGGER_USER** and **SWAGGER_PASSWORD**) for access.

## 💡 Usage

### Endpoints

- **Authentication:**
  - /auth/login: Log in and receive a JWT token.

- **Diary:**
  - /diaries: Create and manage diary entries.

- **OpenAI Integration:**
  - /openai/chat-completions: Get AI-generated chat completions.
  - /openai/image-generation: Generate images based on a prompt.
  - /openai/text-to-speech: Convert text to speech.

**Testing**
You can use tools like Postman or curl to test API endpoints. Make sure to include the JWT token in the Authorization header for protected routes:

`Authorization: Bearer <your-token>`

5. **Open a pull request.**

## 🧩 Planned Features

- **Markdown Textwriter**
- **Admin Dashboard:** Manage users and their permissions.
- **Analytics:** Insights into diary activity and AI usage.
- **Advanced OpenAI Features:** Support for more OpenAI APIs and fine-tune models.
- **Localization:** Multi-language support for the API and frontend.

## 📄 License

This project is licensed under the [MIT-License](LICENSE).