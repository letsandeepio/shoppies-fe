# The Shoppies App

The shoppies is a full stack web application built for the Shopify Winter Internship Coding Challenge 2020. This repo contains code for the front-end. The code for the backend is available at the: https://github.com/letsandeepio/shoppies-be

## Deployed Version

The app is currently available for demo at https://reverent-booth-ef65f4.netlify.app/login .

## Notes for the demo

- Click on "demo" to login as demo user (saved nomination urls will get rewritten everytime)
- Initial user login can take upto 30 seconds as the backend is deployed on Herokuapp and dyno takes times to warm up after sometime of inactivity.
- There is an interntional delay of 1 or 2 seconds in order to demo the app's loading behaviour.

## Tech Stack

The front-end is built using React.JS and Apollo Client for handling Graphql queries & mutations. Framer Motion is used to animate the various parts of the UI. App uses react router for login page & viewing saved nominations.

The backend is a Graphql end point built using graphql-yoga on top of Express server using Node.JS powered by Prisma & PSQL database. The server acts as a middleware for calling the OMDB api for the movie data.

## Features

- Users can register & login. Demo user can be used to quickly demo the app.
- Users can search for movies and add to or remove from the nomination list.
- Nomination list is stored in Local Storage and persists across sessions.
- User can view more info about the movie on it's IMDB page.
- Once user has nomininated 5 movies, user is shown notification to submit the nominations.
- Once user submits the nominations, a unique url is generated and nominated list is saved to the database under the user name.
- After succesful save to the DB, User is shown option to copy the unique url to the clipboard.
- Anybody with the unique url and can visit the

# App in Actions

## UI Micro-interactions
