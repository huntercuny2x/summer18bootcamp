## Practice with psql

#### Common psql commands
psql is the PostgreSQL command line interface
\?         /* help: list available commands */
\c my_app  /* connect to database 'my_app' */
\dt+       /* list tables */
\d+ fruit  /* describe table 'fruit' */
\q         /* quit */


#### Create a table 

Create a named table with some information about each record. Right now we'll be creating a table about hats:
create table hats (
  name     text,
  material text,
  height   integer,
  brim     boolean
);


#### PostgreSQL commands: insert into
Adds records into a table with supplied information.
insert into hats values ('sun hat', 'straw', 7, true);

insert into hats (name, material, height, brim) values
  ('top hat', 'buckram', 12, true);

insert into hats (name, material, height, brim) values
  ('cloche', 'felt', 6, false),
  ('chicken', 'bwuk bwuk bwuk', 12, false);



#### PostgresSQL commands: select, where
Retrieves information from a table, optionally given conditions.
select * from hats;
select * from hats where name = 'top hat';
select count(*) from hats;

#### PostgreSQL commands: delete from
Removes data from a table that meet given conditions.
delete from hats where name = 'chicken';

#### PostgreSQL commands: alter
Modify a table.
alter table hats add column price integer;

#### Final Exercise
Add three new hats to the hats table.
Select all the hats that are made of felt.
