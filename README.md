# An Ode to the Fresh Prince

[![Deploy to GitHub Pages](https://github.com/Marcosh1515/SSDP3900-A02/actions/workflows/deploy.yml/badge.svg)](https://github.com/Marcosh1515/SSDP0039-A02/actions/workflows/deploy.yml)

## Configuration and Implementation

### React App

- Rather than reusing one of my React apps, I decided to create a simple, single-page one with Vite. I used React, Javascript.

  ```bash
  npm create vite@latest
  ```

- It is meant as an ode to one of my favorites: **The Fresh Prince of Belair**

### Docker:

- The application uses a Dockerfile.dev for development that is spun up with docker-compose.yml.
  - **Dockerfile.dev** is using a `node:18-alpine` environment, installing `pnpm` and exposing port `5173`
  - **docker-compose.yml** contains only one service (`ssdp3900-a02`) that pulls from Dockerfile.dev, port mapping `5173` to `5173`

### GitHub Actions

- The GitHub Page is deployed using a single `deploy.yml` workflow.
- It is possible to deploy using this workflow in 2 ways:
  - Automatically: Anytime a push to the `main` branch occurs
  - Manually: On GH Actions (`workflow_dispatch`)
- The workflow has 2 jobs, both built on `ubuntu-22.04`:

  - **build**

    - Make the repository available for the workflow (checkout)
    - Install `pnpm and node`, and install related dependencies
    - Build the application with `pnpm`
    - Create an `artifact` from the build files for the next step

  - **deploy**
    - The deploy job cannot run until build has succesfully completed
    - The only step is to deploy to GH Pages (`actions/deploy-pages@v4`)

## Development with Docker

This project includes a development environment with hot reload capabilities using Docker.

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

... then access the application at `http://localhost:5173`

## Visit the GitHub Pages

View the public GitHub Pages SPA at: `https://marcosh1515.github.io/SSDP3900-A02/`

## Troubleshooting

- **Build Failures**: Ensure all dependencies are installed correctly
- **Deployment Issues**: Check GitHub Actions logs for detailed error information
- **Path Problems**: Verify that the base path in `vite.config.js` matches your repository name
