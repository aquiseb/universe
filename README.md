
[![Universe](https://repository-images.githubusercontent.com/212691493/85489c80-e63e-11e9-8c44-1a37f345575d)](https://github.com/astenmies/universe)

<h1 align="center">
UNIVERSE
</h1>

<p align="center">
  <strong>
    A minimal demo to get you started with universal apps.
  </strong>
</p>

<p align="center">
    React-Native + Next.js + React-Native-Web
</p>

## Installation

From the root of this project run:

```shell
yarn bootstrap
```

## Watch for changes in packages/core

At the root of this project run:

```shell
yarn watch
```

## Run universe-web

In universe-web run:

```shell
yarn dev
```

## Run universe-mobile (without Expo)

First open *android-studio*, then run an emulator by clicking **Configure > AVD Manager**.

Then run the following commands in separate terminal tabs. 

**Terminal tab 1:**

As react-native does not like symlinks, this command will copy over all your local packages (powered by [react-native-yarn-workspaces](https://github.com/astenmies/react-native-yarn-workspaces))

```shell
yarn watch
```

**Terminal tab 2:**

Start the [metro bundler](https://facebook.github.io/metro/):

```shell
yarn start
```

**Terminal tab 3:**

Build the android version:

```shell
yarn android
```
## Run universe-mobile (with Expo)

Same as without expo, but once it runs, you can easily have the app running on your phone thanks to the expo app.