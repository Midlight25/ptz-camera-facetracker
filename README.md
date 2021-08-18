# PTZ Camera Face Tracker

## Description

Do you have an off-brand PTZ camera that you use for production of content? Do you have a presenter who likes to walk back and forth on a stage, far enough so that you have to get up and use the joystick to reposition the camera, only for the presenter to immediately return to his position? Do you wish to automate a rather tedious task of doing your job?

I felt the same way! When my production upgraded from old Sony cameras to shiny new *wish.com* PTZ cameras, moving those same cameras suddenly became my job! Hey! "I already do enough on the switchboard, don't give me more to do!" In any case, I discovered that the cameras exposed a REST Api for issuing move commands and suddenly the idea became clear. Combine the RTSP stream, a machine-learning algorithm for tracking faces, and ONVIF Profile S support, perhaps I could indeed automate moving a camera to follow someone who refuses to stay in one spot for thirty minutes.

The endgame is to build a progressive web application that can be installed on any OS that is able to work offline, without a connection to the internet. By moving the processing code onto the client side, I also don't have to fund any infrastructure to get this app to work. Meaning that I can provide this app, free of charge to you guys.

*This is also my first real application, please be nice! Thanks!!!*

~ Michael Mesquita

## Dependencies

This project was made using this template for Electron.js, Vue 3, and Typescript development. [robertcorponoi/electron-vue3-ts-quick-start](https://github.com/robertcorponoi/electron-vue3-ts-quick-start)

That template includes these packages for development.

- [Vue3](https://v3.vuejs.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) for testing.
- [Typescript](https://www.typescriptlang.org/) support for Vue components
- [electron-reloader](https://github.com/sindresorhus/electron-reloader) to reload the app on changes
- [electron-builder](https://github.com/electron-userland/electron-builder) for packaging and building your Electron app.
- [dotenv](https://github.com/motdotla/dotenv) to load environment variables

For control of the ONVIF PTZ cameras, the ONVIF library was used.

- [agsh/onvif](https://github.com/agsh/onvif)

## **Scripts**

- `npm run start`: Starts the Electron app.
- `npm run build:dev`: Builds the Vue app to the `dist` directory which is used by Electron to display the app.
- `npm run build:dev:watch`: The same as above except it watches for and reloads on changes.
- `npm run build:prod`: Creates a production ready build.
- `npm run test:unit`: Runs the unit tests defined under `test/unit`.
- `npm run lint`: Runs ESLint to check for issues.
- `npm run dist`: Runs `npm run build:prod` and then calls electron-builder to package the Electron app.
- `npm run dist:mac`: Runs `npm run build:prod` and then calls electron-builder to package the Electron app for OSX.
- `npm run dist:linux`: Runs `npm run build:prod` and then calls electron-builder to package the Electron app for a Linux environment.
- `npm run dist:windows`: Runs `npm run build:prod` and then calls electron-builder to package the Electron app for Windows.
- `npm run dist:all`: Runs `npm run build:prod` and then calls electron-builder to package the Electron for OSX, Linux, and Windows.
