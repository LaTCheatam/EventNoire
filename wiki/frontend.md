# User-facing routes

## `/login`

This page displays a login form.

*  `GET /login`
*  `POST /login`
*  `GET /demo`
*  `POST /demo`

## `/signup`

This page displays a signup form.

*  `GET /signup`
*  `POST /signup`

## `/`

This page displays the Events, as well as the navigation and search bar, and login/signup/demo buttons. _Logged in users_ can also promote Events.

* `GET /`
* `GET /search`
* `POST /api/events/:id/promote`

## `/createEvent`

This page displays a form with which a logged in Host can craft a new Event, as well as a navigation and search bar, and login/signup buttons. 

* `POST /Event`

# `/events/:id`

This page displays the individual Event with all of the specific details. It will also display the navigation and search bar, login/signup buttons, logout button that redirects to the homepage. And if the _logged in Host_ owns the currently displayed Event, the page also renders an update, delete, and promote button.

* `GET /events/:id`
* `POST /events/:id/promote`
* `DELETE /events/:id/`