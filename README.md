# The Shoppies App

The Shoppies is a full-stack web application emulating a fictitious awards nomination site. This repo contains code for the front-end. The code for the backend is available at the: https://github.com/letsandeepio/shoppies-be

## Deployed Version

The app is currently available for demo at https://reverent-booth-ef65f4.netlify.app/login .

## Notes for the demo

- Please on "demo" to login as demo user (saved nomination URLs will get rewritten every time)
- Initial user login can take up to 30 seconds as the backend is deployed on Herokuapp and dyno takes time to warm up after some time of inactivity.
- There is an intentional delay of 1 or 2 seconds from the backend server in order to demo the app's loading behaviour.

## Tech Stack

The front-end is built using React.JS and Apollo Client for handling Graphql queries & mutations. Framer Motion is used to animate the various parts of the UI. App uses react-router for login page & viewing saved nominations.

The backend is a Graphql endpoint built using graphql-yoga on top of Express.js server using Node.JS powered by Prisma & PSQL database. The server acts as a middleware for calling the OMDB API for the movie data.

## Features

- Users can register & login. Demo User can be used to quickly demo the app.
- Users can search for movies and add to or remove from the nomination list.
- Nomination list is stored in Local Storage and persists across sessions.
- User can view more info about the movie on it's IMDB page.
- Once the user has nominated 5 movies, the user is shown notification to submit the nominations.
- Once a user submits the nominations, a unique URL is generated and the nominated list is saved to the database under the user name.
- After successful save to the DB, the User is shown the option to copy the unique URL to the clipboard.
- Anybody with the unique URL can view the nomination list of the given user.

# App in Action

![welcome](https://raw.githubusercontent.com/letsandeepio/shoppies-fe/master/documentation/app-in-action.png?token=ALTCEDSBQGM5WIAV7TFW4A27LY4XE)

## UI Micro-interactions

- Loading indicator is shown while login is in process.
- Users can type and get instant results without the need of clicking submit or enter. A loading indicator is displayed to show ongoing search.
- Users get results in form of cards with movie posters displayed prominently.
- On hover, the result card is enlarged and a trophy icon is displayed to the user to nominate the movie.
- When a user clicks the nominate button
  - a "nominated" badge appears and persists across all searches on the nominated movie card.
  - the movie is added to the nomination lists with slide-in animation
- If the user hover's in on the nomination list card, two small buttons are displayed - link to the IMDB page and the option to drop the nomination. Slideout animation is used to remove the movie from the list for dropped nomination
- A notification slides in once the user selects 5 movies.
- Loading indicator is shown once the user clicks the submit button for nominated movies.
- Notification area becomes enlarged and displays a link to the nomination list along with a copy to clipboard button. Once the link is copied to the clipboard, the text changes to copy.
