# Angular Weather Map

Angular Weather map aims to create a lightweight, custom solution for quickly accessing weather information for any location.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

**Why this project?**

Many of us have friends or family living in different parts of the country or around the world. It would be incredibly useful to have a fast and easy way to check the current and forecasted weather for various locations worldwide. While existing websites offer this functionality, they tend to be bulky and slow.

**Project navigation**

**Dashboard/Home Page:**
Displays the current weather and weather icons for multiple locations.
Users can add new locations to the dashboard.
Clicking on a location will open its detailed weather information.

**Details Page:**
Displays both current and forecasted weather for a single location.

**API Integration:**
Data is fetched from the OpenWeatherMap Current Weather API.
The app uses the current weather and forecast data to display weather information.

**Example API Request:**
To fetch current weather for a location (e.g., Cologne), the request would look like this:
https://api.openweathermap.org/data/2.5/weather?q={location}&appid={your_api_key}

**Technical Details**

**Angular:** JavaScript framework for building the user interface.
**Bootstrap:** CSS framework for styling and layout.
**OpenWeatherMap API:** Provides weather data.
API Doumentation: [OpenWeatherMap Current Weather API](https://openweathermap.org/current)

**Steps to Run the App Locally**

Clone the Repository
Clone the repository to your local machine using the following command:
git clone <repository-url>

**Install Dependencies**
Navigate to the project directory and install the required dependencies using npm:

cd <project-directory>
npm install

**API Key Configuration**

Sign up at OpenWeatherMap to get your API key.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
