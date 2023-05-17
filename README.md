# Note Taker

This is a web application called Note Taker that allows users to write and save notes. The application uses an Express.js back end to handle the note data, which is stored and retrieved from a JSON file.

## Table of Contents

- [Author](#author)
- [Getting Started](#getting-started)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Features](#features)
- [License](#license)

## Author

- Mauricio Trevino
- Github: [mauri-tech](https://github.com/mauri-tech)
- Email: mauricio.trevinon91@gmail.com

## Getting Started

To get started with the Note Taker application, follow the steps below:

1. Clone the starter code repository.
2. Create your own repository with the starter code. **Do not fork the starter code repository**.
3. Set up the required dependencies by running `npm install` in your project directory.
4. Implement the necessary code to build the back end and connect it with the front end.
5. Deploy the entire application to Heroku.
6. Test the functionality of the Note Taker application.

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria

The Note Taker application should fulfill the following acceptance criteria:

1. When the user opens the Note Taker, they should be presented with a landing page that includes a link to a notes page.
2. Clicking on the link to the notes page should display a page with existing notes listed in the left-hand column and empty fields to enter a new note title and text in the right-hand column.
3. After entering a new note title and text, a Save icon should appear in the navigation at the top of the page.
4. Clicking on the Save icon should save the new note and display it in the left-hand column with the other existing notes.
5. Clicking on an existing note in the list in the left-hand column should display that note in the right-hand column.
6. Clicking on the Write icon in the navigation at the top of the page should present empty fields to enter a new note title and text in the right-hand column.

## Mock-Up

The following images illustrate the appearance and functionality of the Note Taker web application:

1. The landing page with existing notes listed in the left-hand column and empty fields on the right-hand side for the new note's title and text.
2. A note titled "Balance accounts" is displayed with other notes listed on the left.

## Features

The Note Taker application should include the following features:

- A db.json file on the back end that will be used to store and retrieve notes using the fs module.
- HTML routes:
  - `GET /notes` route should return the notes.html file.
  - `GET *` route should return the index.html file.
- API routes:
  - `GET /api/notes` route should read the db.json file and return all saved notes as JSON.
  - `POST /api/notes` route should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. Each note should have a unique ID.
- Bonus Feature (optional):
  - `DELETE /api/notes/:id` route should receive a query parameter containing the ID of a note to delete. It should read all notes from the db.json file, remove the note with the given ID, and then rewrite the notes to the db.json file.

## Deployed Link

## License

This project is licensed under the [MIT License](LICENSE).
