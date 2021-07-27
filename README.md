# Aspire React Native App 

    This repo contains the code of User's Debit Card Details for the Aspire APP

## Initial Setup

1. Make Sure to check the Latest Version of Node, React,
2. Install react-native-cli globally on your computer
    yarn global add react-native-cli

#### Basic Setup

1. Clone the repo
2. `yarn install` to fecth the node modules
3. `cd ios && pod install` to install cocoapod dependencies 
4. `yarn ios` or `yarn android` to run the app on ios and android

#### Setup Troubleshooting

```
$ yarn start
yarn run v1.22.0
error Aspire@0.0.0: The engine "node" is incompatible with this modele.
Expected version ">12.16.3". Got "11.12.0"
error Commands cannot run with incompatible environment.
info Visit https://yarnpkg.com/en/docs/cli/run for documentationabout this command.
```

Download the node version or if using nvm, run `nvm use`

---

Something about fonts not vaialable

```
npx react-native-link
yarn ios
```

#### Business Logic Implentation:

1. Click on the below attached link to refer the marking spot on the image, which will allow to modify spending amount in the real app.

![Alt text](./setSpendingAmount.png?raw=true "Title")

2. Click on the Weekly Spending Limit toggle button, on 'true' it will navigate to the Spending limit screen where the weekly spending limit can be set and on save it will navigate back to the debit card screen again.

3. Click on the Show/Hide to toggle the card secret details to show and hide.

