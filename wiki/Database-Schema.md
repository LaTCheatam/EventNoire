# **Database Schema**

## `users`

| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| id                | integer   | not null, primary key     |
| userName          | string    | not null, unique          |
| email             | string    | not null, indexed, unique |
| hashedPassword    | string    | not null, binary          |
| created_at        | datetime  | not null                  |
| updated-at        | datetime  | not null                  |

* index on `email, unique: true`

## `events`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| eventTitle  | string    | not null, unique      |
| content     | string    | not null              |
| userId      | integer   | not null, foreign key |
| numTickets  | integer   | not null,             |
| eventDate   | datetime  | not null              |
| eventStart  | datetime  | not null              |
| eventEnd    | datetime  | not null              |
| created_at  | datetime  | not null              |
| updated-at  | datetime  | not null              |

* `userId` references `users` table

## `tickets`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| eventId       | integer   | not null, foreign key |
| created_at    | datetime  | not null              |
| updated-at    | datetime  | not null              |

* `eventId` references `events` table
