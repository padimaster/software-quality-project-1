# Asanas
This project is a web application developed with Next.js and TypeScript, aiming to provide a comprehensive guide to yoga poses in three languages: Spanish, Sanskrit, and English. Beyond its visual appeal, the project stands out for its commitment to software quality through the adoption of industry standards and a robust DevOps lifecycle. The application leverages a stack that includes Next.js, TypeScript, Husky, ESLint, Prettier, Jest, and Vercel to ensure both a delightful user experience and a smooth development process.

# Technologies Used
- **Next.js:** A React framework renowned for building performant web applications.
- **TypeScript:** A typed superset of JavaScript, enhancing code reliability and maintainability.
- **Husky:** Enabling pre-commit and pre-push scripts to maintain code consistency.
- **ESLint with Standard TS:** A powerful linting tool with TypeScript standards to catch and correct coding errors.
- **Prettier:** Ensuring consistent and clean code formatting across the project.
- **Jest:** A testing framework facilitating unit and integration tests for robust code.
- **Vercel:** A cloud platform chosen for seamless deployment, hosting, and scalability.

# Project Structure
The project adheres to the structural conventions of Next.js, providing a clean and organized codebase:

```php
├── .husky/            # Precommit and Prepush hooks
├── public/             # Static files
├── src/
│   ├── app/     # Reusable React components
│   ├── components/          # Application pages
│   ├── dictionaries/        # Translation files
│   ├── services/          # Data fetching tools
├── .eslintrc.json         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── jest.config.mjs       # Jest configuration
├── package.json         # npm configuration file
```
# Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/yoga-poses-app.git
cd yoga-poses-app
```
3. Install dependencies
  ```bash
npm install || yarn
```
# Devops Lifecycle
## Continuous Integration and Deployment with GitHub Actions

The project embraces a robust DevOps lifecycle, integrating GitHub Actions for continuous integration and deployment:

- **Husky and ESLint Checks:** Husky enforces ESLint checks before each commit, maintaining code quality.
- **Automated Tests with Jest:** Jest handles unit and integration tests, with GitHub Actions automatically running them on every push.
- **Deployment to Vercel:** A streamlined workflow automatically deploys the application to Vercel once all tests pass.

# Usage
1. Start the application in development mode:
```bash
npm run dev
```
2. Access the application at http://localhost:3000.

# Contribution
For those contributing to this project, adhering to the outlined best practices and ensuring that contributions pass all automated checks and tests is paramount.

# License
This project is licensed under the (MIT License)[https://opensource.org/license/mit]

Thank you for contributing to the development of the Yoga Poses application! Namaste 🧘🏽‍♂️🧘🏻‍♀️
