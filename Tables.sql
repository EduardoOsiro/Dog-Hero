-- Active: 1656521719943@@35.226.146.116@3306@silveira-21814656-eduardo-osiro

CREATE TABLE dog_hero_walk (
     id VARCHAR(255) PRIMARY KEY,
     status VARCHAR(255) NOT NULL,
     date VARCHAR (255) NOT NULL, 
     price INT NOT NULL,
     duration VARCHAR (255) NOT NULL,
     latitude VARCHAR (255) NOT NULL,
     longitude VARCHAR (255) NOT NULL,
     pets INT NOT NULL,
     start_time VARCHAR (255) NOT NULL,
     end_time VARCHAR (255) NOT NULL
);
