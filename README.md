
# TypeScript Foundation

## Required Software

01. Node.js
02. npm
03. TypeScript

## Required Extensions

01. TypeScript Extension Pack
02. TypeScript 7
03. Pretty TypeScript Errors

## Folder Structure

```text
TypeScript-Foundation/
│
├── dist/
│   └── script.js
│
├── src/
│   └── script.ts
│
├── .gitignore
├── example.js
├── index.html
├── tsconfig.json
└── README.md
```

## Project Setup Commands

```bash
# Main folder
mkdir TypeScript-Foundation
cd TypeScript-Foundation

# Create folders
mkdir src dist

# Create files
touch src/script.ts
touch dist/script.js
touch .gitignore
touch example.js
touch index.html
touch tsconfig.json
touch README.md
```

## TypeScript Configuration

```bash
# Initialize TypeScript configuration
tsc --init

# Watch mode - Automatically compile on file changes
tsc --watch
```

## HTML Script Configuration

Add this script tag inside your `index.html` file:

```html
<script type="module" src="./dist/script.js"></script>
```

## Run Live Server

```bash
# Start local development server
npx live-server
```

## Important Notes

- Run commands from the main project folder.
- `tsc --watch` automatically compiles TypeScript files when changes are detected.
- Use the compiled JavaScript file (`dist/script.js`) in HTML.
- Run `npx live-server` to open your project through a local HTTP server.
- Press `Ctrl + C` to stop a running terminal process.
- `touch` works in Git Bash. In Windows CMD, use `type nul > filename` to create files.

---

**Happy Coding!**
