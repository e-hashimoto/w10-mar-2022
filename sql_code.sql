-- psql -d boardgame_dev < mod4/w10/sql_code.sql

-- 2d
DROP TABLE IF EXISTS lfg;
DROP TABLE IF EXISTS boardgames; --sql logic to prevent error messages
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS reviews;

-- Task 2a
CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    avg_rating NUMERIC(3, 2) NOT NULL, --1.22, 10.8, 100 are all aceeptable; NOT: 40.76
    max_players INTEGER NOT NULL,
    category VARCHAR(50)
);

-- Task 2b
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    fave_category VARCHAR(50)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    boardgame_id INTEGER REFERENCES boardgames (id),
    -- boardgame_id INTEGER,
    -- FOREIGN KEY (boardgame_id) REFERENCES boardgames (id)
    content TEXT
);

ALTER TABLE players ADD COLUMN prefers_video_games BOOLEAN DEFAULT false;

INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');

INSERT INTO players (name, fave_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', DEFAULT),
    ('Dan', 'Cooperative', DEFAULT),
    ('Ray', 'Adventure', true),
    ('Nate', 'Economic', DEFAULT),
    ('Shane', 'Strategy', DEFAULT),
    ('Geoff', 'Economic', DEFAULT);

INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really love this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);

-- Task 4a
--SELECT * FROM boardgames;

-- Task 4b
--SELECT name, category FROM boardgames;

-- Task 4c
--SELECT * FROM boardgames
--WHERE category = 'Adventure'; -- double quotes don't do shit

-- Task 4d
--SELECT * FROM boardgames
--WHERE avg_rating BETWEEN 8.0 and 8.5;

-- Task 4e
--SELECT *
--FROM boardgames
--WHERE max_players >= 5;

-- Task 4f
--SELECT *
--FROM boardgames
--WHERE category IN ('Adventure', 'Economic');

-- Task 4g
--SELECT * FROM reviews
--WHERE content LIKE '%love%';

-- Task 4h
--SELECT name, (avg_rating * 10) AS percentage
--FROM boardgames
--WHERE category = 'Strategy';

-- Alphabetical order!
--SELECT name FROM players
--ORDER BY name DESC
--LIMIT 1; --DESC to go backwards; default is ASC

-- Task 5a
--UPDATE players
--SET prefers_video_games = true
--WHERE name IN ('Alec', 'Geoff');

-- Task 5b
--DELETE FROM boardgames
--WHERE avg_rating < 8.3;

-- Task 6a
--SELECT *
--FROM boardgames
--JOIN reviews ON (boardgames.id = reviews.boardgame_id)
--WHERE boardgames.id = 5;

 CREATE TABLE lfg (
     id SERIAL PRIMARY KEY,
     player_id INTEGER,
     game_id INTEGER,
     FOREIGN KEY (player_id) REFERENCES players,
     FOREIGN KEY (game_id) REFERENCES boardgames
);

INSERT INTO lfg (player_id, game_id)
 VALUES
     (1, 5),
     (1, 2),
     (3, 1),
     (5, 5),
     (2, 2),
     (4, 4),
     (6, 4),
     (1, 4);

SELECT *
FROM boardgames
JOIN lfg ON (boardgames.id = lfg.game_id)
JOIN players ON (lfg.player_id = players.id)
WHERE boardgames.name = 'Terraforming Mars';