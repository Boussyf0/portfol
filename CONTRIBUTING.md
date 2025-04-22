# Contributing Guidelines

Thank you for considering contributing to my portfolio website! Here are some guidelines to help you contribute effectively.

## Git Workflow

### Branching Strategy

- `main`: Production-ready code
- `develop`: Main development branch
- Feature branches: Create from `develop` with the naming convention `feature/name-of-feature`
- Bugfix branches: Create from `develop` with the naming convention `bugfix/issue-description`

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Code changes that improve performance
- `test`: Adding or correcting tests
- `chore`: Changes to the build process, auxiliary tools, libraries, etc.

Examples:
```
feat(projects): add project card hover effects
fix(contact): correct email link functionality
docs(readme): update installation instructions
refactor(components): extract reusable button component
```

### Pull Request Process

1. Create a pull request from your feature branch to `develop`
2. Ensure your code passes all tests
3. Update documentation if necessary
4. Request a review from maintainers
5. After approval, merge your changes

## Code Style Guidelines

- Follow the existing code style and structure
- Use clear and descriptive variable and function names
- Add comments for complex logic
- Write tests for new functionality

## Project Structure

Maintain the established project structure:

```
website/
├── src/
│   ├── components/       # React components
│   ├── data/             # Data constants
│   ├── utils/            # Utility functions and configuration
│   └── ...
└── ...
```

Thank you for your contributions! 