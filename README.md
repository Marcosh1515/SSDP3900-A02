# The Fresh Prince

[![Deploy to GitHub Pages](https://github.com/Marcosh1515/SSDP3900-A02/actions/workflows/deploy.yml/badge.svg)](https://github.com/Marcosh1515/SSDP0039-A02/actions/workflows/deploy.yml)

An ode to the FRESH PRINCE.

## Development with Docker

This project includes a development environment with hot reload capabilities using Docker.

### Prerequisites

- Docker and Docker Compose installed on your machine
- Git

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Marcosh1515/SSDP3900-A02.git
   cd SSDP3900-A02
   ```

2. Start the development container:

   ```bash
   docker-compose up
   ```

3. Access the application at `http://localhost:5173`

## Manual Deployment

You can manually deploy the application with:

```bash
pnpm install
pnpm run deploy
```

## Visit the GitHub Pages

View the public GitHub Pages SPA at: `https://marcosh1515.github.io/SSDP3900-A02/`

## Configuration and Implementation

## Troubleshooting

- **Build Failures**: Ensure all dependencies are installed correctly
- **Deployment Issues**: Check GitHub Actions logs for detailed error information
- **Path Problems**: Verify that the base path in `vite.config.js` matches your repository name
