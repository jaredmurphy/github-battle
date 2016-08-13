
DROP TABLE IF EXISTS battles;
DROP TABLE IF EXISTS repos;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS githubUsers;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE githubUsers (
  id SERIAL PRIMARY KEY,
  github_id INTEGER NOT NULL UNIQUE,
  login VARCHAR NOT NULL,
  image VARCHAR NOT NULL,
  followers INTEGER NOT NULL,
  following INTEGER NOT NULL,
  public_repos INTEGER NOT NULL,
  public_gists INTEGER NOT NULL,
  github_url VARCHAR NOT NULL,
  location VARCHAR,
  blog VARCHAR,
  company VARCHAR,
  created VARCHAR NOT NULL,
  email VARCHAR,
  wins INTEGER DEFAULT 0 NOT NULL
);

CREATE TABLE battles (
id SERIAL PRIMARY KEY,
winner_id INTEGER NOT NULL,
loser_id INTEGER NOT NULL,
winner_login VARCHAR NOT NULL,
loser_login VARCHAR NOT NULL,
winner_image VARCHAR NOT NULL,
loser_image VARCHAR NOT NULL,
winner_score INTEGER NOT NULL,
loser_score INTEGER NOT NULL,
winner_url VARCHAR NOT NULL,
loser_url VARCHAR NOT NULL,
my_date date not null default CURRENT_TIMESTAMP
);

CREATE TABLE repos (
  id SERIAL PRIMARY KEY,
  github_id INTEGER NOT NULL UNIQUE,
  user_id INTEGER NOT NULL REFERENCES githubUsers(id) ON UPDATE CASCADE ,
  githubUser_id INTEGER NOT NULL REFERENCES githubUsers(github_id) ON UPDATE CASCADE,
  language VARCHAR NOT NULL,
  has_downloads BOOLEAN NOT NULL,
  stargazers_count INTEGER NOT NULL,
  watchers_count INTEGER NOT NULL,
  forks_count INTEGER NOT NULL,
  forks INTEGER NOT NULL,
  watchers INTEGER NOT NULL
);
