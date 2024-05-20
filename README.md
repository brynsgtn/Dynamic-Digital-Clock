# Dynamic Digital Clock

This repository contains code for a dynamic digital clock application implemented in JavaScript using the Day.js library for time zone handling.

## Overview

The Dynamic Digital Clock is a web-based application that displays the current time, date, and time zone information. It allows users to select their desired time zone from a dropdown menu and switches between light and dark modes for improved readability.

## Features

- Real-time updating of the clock display
- Time zone detection and selection
- Light and dark mode toggling for better visibility
- Customizable appearance through CSS styling

## Purpose

I built this web application as a practice project to enhance my skills in JavaScript development and to gain experience with npm package management. This project allowed me to explore various libraries and tools, such as Day.js, MicroModal, and Browserify, and to learn how to integrate them into a real-world application.

## Deployment

The Dynamic Digital Clock is deployed using GitHub Pages. You can access the live demo [here](https://brynsgtn.github.io/Dynamic-Digital-Clock/).

## Documentation

- [Day.js Documentation](https://day.js.org/docs/en/getting-started/installation)
- [MicroModal Documentation](https://micromodal.now.sh/)
- [npm Documentation](https://docs.npmjs.com/)

## Usage

To use the Dynamic Digital Clock application:

1. Clone or download the repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Run `npm install` to install the required dependencies.
4. Use Browserify to bundle the JavaScript code:
   ```sh
   browserify main.js -o bundle.js
