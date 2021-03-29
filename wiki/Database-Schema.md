# **Database Schema**

## `hosts`

| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| id                | integer   | not null, primary key     |
| hostname          | string    | not null, unique          |
| email             | string    | not null, indexed, unique |
| hashedPassword    | string    | not null, binary          |
| created_at        | datetime  | not null                  |
| updated-at        | datetime  | not null                  |

* index on `email, unique: true`

## `users`

| column name     | data type | details                        |
|-----------------|-----------|--------------------------------|
| id              | integer   | not null, primary key          |
| userName        | integer   | not null, unique               |
| email           | integer   | not null, indexed, unique      |
| hashedPassword  | integer   | not null, binary               |
| created_at      | datetime  | not null                       |
| updated-at      | datetime  | not null                       |

* Unique index on `[hostId, eventId]`
* Unique index on `[eventId, ticketId]`

## `events`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| eventTitle  | string    | not null              |
| content     | string    | not null              |
| hostId      | integer   | not null, foreign key |
| noOfTix     | integer   | not null,             |
| eventDate   | datetime  | not null              |
| eventStart  | datetime  | not null              |
| eventEnd    | datetime  | not null              |
| created_at  | datetime  | not null              |
| updated-at  | datetime  | not null              |

* `hostId` references `hosts` table

## `tickets`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| hostId        | integer   | not null, foreign key |
| eventTitle    | string    | not null, foreign key |
| eventId       | integer   | not null, foreign key |
| eventDate     | datetime  | not null, foreign key |
| eventStart    | datetime  | not null, foreign key |
| eventEnd      | datetime  | not null, foreign key |
| created_at    | datetime  | not null              |
| updated-at    | datetime  | not null              |

* `hostId` references `hosts` table
* `eventId` references `events` table
* `eventTitle` references `events` table
* `eventDate` references `events` table
* `eventStart` references `events` table
* `eventEnd` references `events` table

