
# React Vite Boilerplate

This repository is a template boilerplate for getting started with a React App + Vite which can be deployed to [Fleek XYZ](https://fleek.xyz/) directly.

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Javascript](https://www.javascript.com/)
- [eslint](https://www.npmjs.com/package/eslint)
- [prettier](https://prettier.io/)

## Getting Started

```bash
  yarn add react-vite-template
  cd react-vite-template
```

 ## Developing   
```bash
  yarn run dev
```

## Build your project
```bash
  yarn build
```

## Deploy

The first step to deploy a site using Fleek.xyz CLI is to stand in the project directory and run fleek sites init command.

```bash
  > fleek sites init
```

For this process the CLI checks if a fleek.json file exists, in the case it does not it starts a step by step process to set up the site.

```bash
> fleek sites init
WARN! Fleek CLI is in beta phase, use it under your own responsibility
✔ Choose one of the existing sites or create a new one. › Create a new site
✔ Type name of you new site. … react-vite-template
✔ Specify the dist directory from where the site will be uploaded from … dist
✔ Do you want to include the optional "build" command? … yes
✔ Specify `build` command … npm run build
> Success! Fleek config file has been saved.
```

Now we can see that a fleek.json file has been created with the configuration for our deploy, this files looks like this.

```bash
  {
  "id": "cldda19st0000kz081v8v9esj",
  "name": "react-vite-template",
  "distDir": "dist",
  "buildCommand": "npm run build"
}
```

If we try to run again the fleek sites init command then we will be greeted with the following message

```bash
> fleek sites init
WARN! Fleek CLI is in beta phase, use it under your own responsibility
Error: Configuration file found already.
> Site already exists in this folder.
```

Now that we have our site configured and our deploy all set up we can proceed to deploy it using the fleek sites deploy command. This will start by checking the existance of the fleek.json file and start the build and upload process.

```bash
> fleek sites deploy
WARN! Fleek CLI is in beta phase, use it under your own responsibility
 
> build
> vite build
```

Once the process is finished you will have an IPFS CID that represents you site.

```bash
Export successful. Files written to fleek-demos-blog/out
 
> Success! Deployed! IPFS CID: Qmb2psuVMkGfSdH3egfLEHc2di5VKtDVdTqtB8wqFNbK2h
```


