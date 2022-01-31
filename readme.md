# RestIn Company API

## Summary

A Simple RestFull API that will allow customers to view vacation destination with all the related details and also let the administrator to read,edit,create,delete customers data and vacation property details.

## Heroku Link: OPEN[]()

## End Points

#### Get /customers/:id

The above end point is used the view customer details by specifying the primary key of the dataSet. The above endpoint dosen't allow any filters

#### Post /customer

The above end point creates a customer. You must submit the data in the body of the request in JSON format
The data includes:

firstName (required)
lastName  (required)
email     (required)
password  (required)
phone:    An array of number


#### Get /property

The above end point is used the view all property details.

The above end point also allow you to filter propertis by passing any of the below query string parameters :

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| title     | Title of the property                          |
| location  | Location at which the property is avaialble    |
| besteller | The boolean value of the property type         |

#### Get /property/types

The above end point is used the view property types for all the properties.

#### Post /property

The above end point creates a property. You must submit the data in the body of the request in JSON format
The data includes:

title        (required)
rentalPrice  (required)
description
type         (required)
location     (required)
bestSeller   (required)
photo
houseRules   An array with the set of rules for the customers
amenities    (required)    


#### Put /property/:id

The above end point updates a property based on the id provided. The client application is required to submit the property data ,in the body of the request (as JSON), that is required to be updated: The data includes :

title,
rentalPrice,
description,
location,
type,
bestSeller,
photo,
houseRules
amenities


#### Delete /property/:id

The above end point deletes a property based on the id provided


### Rules to set up back-end (Locally)

1. Clone source code by running: **git clone GITHUP_PROJECT_URL .** Add clone project to a blank workspace area in your code editor
2. After Cloning, re-install ALL 3rd party dependencies by running **npm install**
3. Create a folder within the project called **config**  This config folder must be on the root.
4. Within the **config** folder, create a file called **data.env**
5. Within the **data.env** file, create the below environment variables :
      - **PORT** - Any port number that is valid (8080) is recommended
      - **CONNECTION_String** - Assign your MongoDB Database Connection String for your Test cases. Ensure that this value points to a different database because the data for this will b wiped after your test cases run.
6. Run application (locally) by running : **npm run dev**


