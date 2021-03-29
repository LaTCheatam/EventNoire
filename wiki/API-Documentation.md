# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Hosts

* A logged in Host may update an event date or time without causing a refresh/redirect.

  * `UPDATE /api/events/:id`

## Users

* A logged in user may save an event to bookmarks, marking it with a purple heart, without causing a refresh/redirect.

  * `BOOKMARK /api/events/:id`

## Events

* A logged in user can promote events or with visible confirmation without causing a refresh/redirect.
  
  * `POST /api/events/:id/promote`