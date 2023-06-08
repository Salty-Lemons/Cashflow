# Cashflow

Guide for getting dowloading and building the CashFlow project.

# Getting Started

Prerequisites:
* NodeJS installed and added to PATH enviroment variable
* Android Studio for the AVD Manager
* VS Code or preferred text editor
* Git installed and added to PATH enviroment variable

# Install NodeJS

https://nodejs.org/en/download

Install NodeJS and add to PATH

This will allow you to build and run the app

# Install Android Studio (Only for Android Emulator)

Android Studio will be used for the Android Emulator. Can be skipped if you only want to use the Expo IOS build on your phone. 

https://developer.android.com/studio?gclid=CjwKCAjw-IWkBhBTEiwA2exyO8IjuwDypbpQktNKHZOP0UL3Uyu61KCK7h1wgU92OYoqHa5cRUvAARoCe1kQAvD_BwE&gclsrc=aw.ds

After downloading, go to the Android Studio settings and download the Android SDK and platform-tools and download an Android version and set up an emulator with that Android version.

Run the emulator and it should be found automatically when the project is running.

# Run the React Native Project

Clone the git repo by running ```git clone yourGitRepoURL```

Move into the directory of the newly cloned repo using ```cd yourProject```

Run ```npm install``` to install needed dependancies

Run ```npx expo start``` to run the project

Once project is running, scan the QR code to run the projcet through expo on your phone.
