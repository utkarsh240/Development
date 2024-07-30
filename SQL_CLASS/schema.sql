create table user(
    id varchar(50) primary key,
    username varchar (50) unique,
    email varchar(15) unique not null,
    password varchar(25) not null
);