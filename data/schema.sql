DROP TABLE IF EXISTS thelocations ;
CREATE TABLE thelocations (
    id SERIAL PRIMARY KEY,
    search_query VARCHAR(255),
    formatted_query VARCHAR(255),
    latitude NUMERIC(10,7),
    longitude NUMERIC(10,7)
);
-- 
DROP TABLE IF EXISTS yelp ;
CREATE TABLE yelp (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255),
    image_url VARCHAR(255),
    price NUMERIC,
    rating NUMERIC,
    url VARCHAR(255)
);
