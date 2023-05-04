# Lens Protocol Front-End Starter Kit 🌿

This is an example frontend app made by [Nader Dabit](https://twitter.com/dabit3) to start to build on top of [Lens Protocol](https://www.lens.xyz/). 

> For this project to run, you must configure the Infura project ID and project secret in a file named `.env.local`. Check out .example.env.local for guidance.

The main API calls used in this app are defined in __api/index.js__:

1. [recommendProfiles](https://docs.lens.xyz/docs/recommended-profiles#api-details) - Get popular profiles

2. [getProfiles](https://docs.lens.xyz/docs/get-profiles) - Get profiles by passing in an array of `profileIds`

3. [getPublications](https://docs.lens.xyz/docs/get-publications) - Returns a list of publications based on your request query

4. [searchProfiles](https://docs.lens.xyz/docs/search-profiles-and-publications) - Allows a user to search across hashtags on publications or profile handles. This query returns either a Post and Comment or Profile.

5. [follow](https://docs.lens.xyz/docs/functions#follow) - Follow a user

6. [burn](https://docs.lens.xyz/docs/functions#burn) - Unfollows a user

7. [timeline](https://docs.lens.xyz/docs/user-timeline) - Shows a feed of content tailored to a signed in user

8. [createSetProfileMetadataTypedData](https://docs.lens.xyz/docs/create-set-update-profile-metadata-typed-data) - Allows a user to update the metadata URI for their profile

9. [post](https://docs.lens.xyz/docs/functions#post) - Allows a user to publish content

You can view all of the APIs [here](https://docs.lens.xyz/docs/introduction) and contract methods [here](https://docs.lens.xyz/docs/functions)


## Run the project

You can run the project following the next steps.

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3010`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |


## ⚡ How to deploy to Fleek

### 1. Create a `fleek.json` config file:
You can configure this site deployment using [Fleek CLI]() and running:
```
 > fleek sites init
  WARN! Fleek CLI is in beta phase, use it under your own responsibility
   ? Choose one of the existing sites or create a new one. › 
    ❯ Create a new site
```
 It will prompt you for a `name`, `dist` directory location & `build command`

 - `name`: How you want to name the site
 - `dist`: The output directory where the site is located, for this template it's `dist`
 - `build command`: Command to build your site, this will be used to deploy the latest version either by CLI or Github Actions

### 2. Deploy the site
After configuiring your `fleek.json` file, you can deployt the site by running

```
fleek sites deploy
```
After running it you will get an output like this:
```
 WARN! Fleek CLI is in beta, use it at your own discretion
  > Success! Deployed!
   > Site IPFS CID: QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M

    > You can visit through the gateway:
     > https://ipfs.io/ipfs/QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M
```

### Extra features
- **Continuous Integration (CI):** `fleek sites ci` [Documentation.](https://docs.fleek.xyz/services/sites/#continuous-integration-ci)
- **Adding custom domains:** `fleek domains create` [Documentation.](https://docs.fleek.xyz/services/domains/)


## Build3rs Stack Lens Protocol 

You can learn more about [Lens](https://www.lens.xyz/) visiting our Build3rs Stack - web3 infrastructure overview series in the official [Fleek Blog](https://blog.fleek.xyz/). Where we provide a [developer guide](https://blog.fleek.xyz/post/builders-stack-lens-protocol/) to start to build with it. 

