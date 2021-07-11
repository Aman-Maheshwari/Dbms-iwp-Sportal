# Sportal - A Scholarship portal

### Introduction

There are many website from where we can look for the scholarships, but the filters for searching the scholarships are quite uncommon.
Sportal tries to bring the easy search for scholarship with a very littel information. User can look for the scholarships that they are eligible for in few clicks.

-----

### Technologies used 

- HTML
- CSS
- JavaScript
- Node.js
- MySQL


### Running instructions



Download and install MySQL from [here](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)


Install [Nodejs](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) 


#### Create tables in MySQL database
```
Create database - sportal, in mysql
From project/mysql/ first run scholarship.txt and then rest of the files.

```

#### Check the port at which MySQL is running using
```
show global variables like 'port' and update it in connfig.js.
````

#### Install dependencies
```
npm install or npm i 
```
#### Run Node Server
```
node index.js
```