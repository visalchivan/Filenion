# Filenion

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.15.0-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)

> A modern, multi-tenant file manager platform built for teams and organizations

## 📖 About

Filenion is an open-source, enterprise-grade file management platform designed to provide secure, scalable, and user-friendly file storage, sharing, and collaboration capabilities. Built with modern web technologies, it offers a robust foundation for organizations that need to manage files across multiple teams and projects.

### Why Filenion?

- **Multi-tenant Architecture**: Secure isolation between different organizations and teams
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Prisma for reliability and performance
- **Enterprise Features**: Role-based access control, audit logs, and comprehensive file management
- **Self-hosted**: Full control over your data and infrastructure
- **Scalable**: Designed to handle growing file storage needs

### Who is it for?

- **Development Teams**: Manage project files, documentation, and assets
- **Organizations**: Centralized file storage with team collaboration
- **DevOps Engineers**: Self-hosted file management solution
- **Open Source Contributors**: Extensible platform for building file management tools

## ✨ Key Features

### 🔐 **Authentication & Security**

- Multi-tenant user management
- Role-based access control (RBAC)
- Secure file sharing and permissions
- Session management with Better Auth

### 📁 **File Management**

- Drag & drop file upload
- Hierarchical folder structure
- File versioning and history
- Advanced search and filtering
- File preview and thumbnails

### 👥 **Collaboration**

- Team member management
- Shared folders and files
- Activity logs and audit trails
- Real-time notifications

### 🏢 **Multi-tenancy**

- Organization isolation
- Team-based file organization
- Cross-team sharing capabilities
- Admin dashboard and controls

### 🔌 **Integrations**

- RESTful API for custom integrations
- Webhook support
- Third-party service connectors
- Custom authentication providers

## 🛠️ Tech Stack

### **Frontend**

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons

### **Backend**

- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Server-side API
- [Prisma](https://www.prisma.io/) - Database ORM
- [Better Auth](https://better-auth.com/) - Authentication framework
- [Zod](https://zod.dev/) - Schema validation

### **Database & Storage**

- [PostgreSQL](https://www.postgresql.org/) - Primary database
- [Redis](https://redis.io/) - Caching and sessions
- [MinIO](https://min.io/) - Object storage (S3-compatible)

### **Infrastructure**

- [Docker](https://www.docker.com/) - Containerization
- [Docker Compose](https://docs.docker.com/compose/) - Multi-service orchestration

## 🚀 Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) 18+ and [pnpm](https://pnpm.io/) (recommended)

### Option 1: Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/filenion-platform.git
   cd filenion-platform
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the application**

   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Web UI: http://localhost:3000
   - MinIO Console: http://localhost:9001
   - PostgreSQL: localhost:5432

### Option 2: Local Development

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up the database**

   ```bash
   # Start PostgreSQL and Redis
   docker-compose up -d db redis minio

   # Run database migrations
   pnpm prisma migrate dev

   # Generate Prisma client
   pnpm prisma generate
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Usage Guide

### Basic Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Database
pnpm prisma migrate dev    # Run migrations
pnpm prisma generate      # Generate Prisma client
pnpm prisma studio        # Open Prisma Studio
```

### First Login

1. Navigate to the application URL
2. Click "Sign Up" to create your first account
3. Verify your email address
4. Log in and start creating your organization
5. Invite team members and start organizing files

### File Management

- **Upload Files**: Drag and drop files into the interface
- **Create Folders**: Use the "New Folder" button to organize content
- **Share Files**: Right-click files to share with team members
- **Set Permissions**: Configure access levels for shared content

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/filenion-platform.git
   cd filenion-platform
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

4. **Commit your changes**

   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include any relevant issue numbers
   - Request reviews from maintainers

### Development Guidelines

- **Code Style**: Follow the existing ESLint configuration
- **TypeScript**: Use strict typing and avoid `any`
- **Testing**: Add tests for new features and bug fixes
- **Documentation**: Update README and code comments
- **Commits**: Use conventional commit format

### Need Help?

- 📖 [Documentation](https://docs.filenion.com) (coming soon)
- 🐛 [Report Issues](https://github.com/your-username/filenion-platform/issues)
- 💬 [Discussions](https://github.com/your-username/filenion-platform/discussions)
- 📧 [Email Support](mailto:support@filenion.com)

## 📸 Screenshots

> _Screenshots will be added here as the application develops_

- **Dashboard Overview**: Main application interface
- **File Management**: File browser and organization
- **Team Collaboration**: User management and sharing
- **Admin Panel**: Organization settings and controls

## 🗺️ Roadmap

### **Phase 1: Core Features** (Q1 2024)

- [x] Multi-tenant architecture
- [x] User authentication and management
- [x] Basic file upload and storage
- [x] Folder organization

### **Phase 2: Collaboration** (Q2 2024)

- [ ] Advanced file sharing
- [ ] Real-time collaboration
- [ ] Version control
- [ ] Comments and annotations

### **Phase 3: Enterprise Features** (Q3 2024)

- [ ] Advanced RBAC
- [ ] Audit logging
- [ ] API integrations
- [ ] Custom workflows

### **Phase 4: Advanced Features** (Q4 2024)

- [ ] AI-powered file organization
- [ ] Advanced search capabilities
- [ ] Mobile applications
- [ ] Offline support

### **Future Considerations**

- [ ] Multi-region deployment
- [ ] Advanced analytics
- [ ] Custom themes and branding
- [ ] Plugin ecosystem

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Prisma](https://www.prisma.io/) team for the excellent ORM
- [Better Auth](https://better-auth.com/) for authentication solutions
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All our contributors and community members

---

**Made with ❤️ by the Filenion community**

If you find this project helpful, please consider giving it a ⭐️ star on GitHub!
