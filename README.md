# qwrtsmc

Welcome to your new [SerenityJS](https://github.com/SerenityJS/serenity) project! Serenity is a robust and flexible Minecraft Bedrock Edition Server Software that was built from the ground up using [Rust](https://www.rust-lang.org/) and [TypeScript](https://www.typescriptlang.org/).

## Getting Started

Before installing Serenity you first need to make sure you have the latest recommended version of [Node.js](https://nodejs.org/en/) installed on your machine. Once installed, it is recommended to fully restart your machine to allow for the full Node.js experience to be enabled. You will also need to use an integrated development environment of personal choice. [Visual Studio Code](https://code.visualstudio.com/) is the recommended environment for Serenity development.

## Installation

Installation should occur automatically when creating the project via our [CLI](https://github.com/SerenityJS/create-serenity). But if for some reason that didn't happen, you can install the dependencies manually by running the following command:

```bash
npm install
```

## Usage

To run your server in development mode, you can use the following command:

```bash
npm dev
```

If you are using a TypeScript project, you can run the following command to compile your TypeScript files:

```bash
npm build
```

To run your server in production mode, you can use the following command:

```bash
npm start
```

### Common Issues

- If the server is running, and you cannot see/join the server on your Minecraft server list, you need exempt the Minecraft client from the UWP loopback restrictions. Execute the bash command in a new terminal, while running as administrator. This applies for Windows machines only. `CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436` You should be notified with a simple `Ok.`