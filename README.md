# Real Sales System in C#-Angular

## Overview
This Sales Control System facilitates managing sales based on customer data. It is designed to simulate sales operations within a company. The system ensures transaction security and database access by requiring a user to obtain a token for performing system operations.

## Login to the System
- **Authentication:** Log in using stored user credentials (email and password).
   - The system encrypts the password to verify against the database.
   - Once authenticated, a token is generated.
   - Use the token as a Bearer Token in the header for making system API calls.
   - **API Endpoint:**
     ```http
     POST https://localhost:7119/api/User/login
     ```

## Retrieve Customer List
- **Purpose:** Fetch a JSON list of system customers, including their ID, name, and sales.
- **API Endpoint:**
  ```http
  GET https://localhost:7119/api/cliente


## Overview
After fetching the customer list, you can perform the following operations:
- Modify existing customers.
- Delete customers.
- Add new customers.

---

## Adding a Customer
- **API Endpoint:**
  ```http
  POST https://localhost:7119/api/cliente

# CRUD Operations for Customer Management

## Request Body (JSON)
For adding or editing a customer, use the following JSON structure in the request body:
json
{
  "Id": "CustomerId",
  "Name": "CustomerName"
}

# Customer Management: Editing, Deleting, and Authentication

## Editing a Customer
- **API Endpoint:**
  ```http
  PUT https://localhost:7119/api/cliente
{
  "Id": "CustomerId",
  "Name": "CustomerName"
}

## Deleting a Customer
- **API Endpoint:**
  ```http
  DELETE https://localhost:7119/api/cliente/{Id}

Replace {Id} with the specific ID of the customer to be deleted.

## Editing a Customer
### Include the Bearer Token in the request header for all operations.
- **API Endpoint:**
  ### Example
 ### Authorization: Bearer <your_token_here>

 ### This ensures that all CRUD operations are securely authorized.

<span style="color:red">Front-End en desarrollo</span>
