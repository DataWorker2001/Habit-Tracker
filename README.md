# Habit Tracking App

Welcome to the Habit Tracking Web App created using React! This web application allows users to track their daily and weekly habits. Developed using React, it provides an intuitive interface for managing habits and monitoring progress.

![image](https://github.com/DataWorker2001/Habit-Tracker/assets/123379937/61dab5ef-f7b5-451a-89cf-0d83ce73844d)


## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Add new habits to track.
- Delete existing habits.
- Track daily activities for each habit.
- View a table of activities for the last seven days by means of Activity Table.
- Persistent storage using browser's local storage.

## Folder Structure

The project's folder structure is organized as follows:

habit-tracking-app/<br/>
├──.firebase<br/>
├── README.md<br/>
├── node_modules/<br/>
├── package.json<br/>
├── package-lock.json<br/>
├── public/<br/>
│   ├── index.html<br/>
│   └── favicon.ico<br/>
│   ├── android-chrome-192x192<br/>
│   ├── android-chrome-512X512<br/>
│   ├── favicon-16X16<br/>
│   ├── favicon-32X32<br/>
│   ├── manifest<br/>
│   ├── robots<br/>
│   ├── site.webmanifest<br/>
└── src/<br/>
    ├── App.js<br/>
    ├── index.js<br/>
    ├── styles.css<br/>
├── .firebasesrc<br/>
├──.gitignore<br/>
├──firebase<br/>

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/DataWorker2001/Habit-Tracker
   
2. Change to the project's directory:
   ```shell
   cd habit-tracking-app
3. Install the dependencies:
   ```shell
   npm install
4. Start the development server by typing the following command in the terminal:
   ```shell
   npm start
5. The default web browser will open and we can see the app running on http://localhost:3000.

## Usage
Once the app is running, you can perform the following actions:

1. Add a new habit to track by entering it in the input field and clicking the "Add Habit To Track" button.
2. Delete an existing habit by clicking the "Delete" button next to the habit.
3. Track the status of each habit's daily activities using the drop-down menus in the activity table.
4. View a table that displays the activities for the last seven days.

## Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
