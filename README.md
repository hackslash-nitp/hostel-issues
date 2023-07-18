# Hostel Issue

Hostel Issue is an innovative web application that aims to revolutionize the complaint system in hostels, providing a modern e-complaint platform for hostel residents and administrators. This platform allows hostel residents to easily report, view, and manage their complaints, while administrators can efficiently address and monitor these issues.

[![image](https://www.linkpicture.com/q/logo_38.png)](https://www.linkpicture.com/view.php?img=LPic64b6a7da91cab617311640)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database Schema](#database-schema)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Hostel Issue is designed to simplify and streamline the process of handling complaints and issues faced by hostel residents. It replaces the outdated manual complaint system with a user-friendly digital platform that allows residents to submit their complaints and track their progress until they are resolved.

## Features

- **User-Friendly Interface:** Hostel residents can easily submit their complaints through a simple and intuitive interface.

- **Real-Time Updates:** Users can view the status of their complaints in real-time, enabling them to stay informed about the progress.

- **Issue Management:** Users have the option to delete their complaints after the issue is resolved, ensuring a clutter-free interface.

- **Administrator Dashboard:** Admins have access to a centralized dashboard where they can monitor, prioritize, and manage all complaints effectively.

- **Labeling System:** Admins can label completed complaints to keep track of resolved issues.

## Technologies Used

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Additional Libraries:** Mongoose, Nodemon

## Architecture

The Hostel Issue web application follows a client-server architecture. The client-side is built using **ReactJS**, responsible for the interactive user interface, while the server-side utilizes **Node.js** with **Express.js**, handling the business logic and communication with the database.

## Components

The application is divided into the following main components:

1. **Client (Frontend):**
   - `src/components`: Contains all the React components used in the user interface.
   - `src/App.js`: The main entry point of the React app.
   - `src/services`: Contains services for handling API calls to the server.

2. **Server (Backend):**
   - `server/index.js`: The entry point of the Node.js and Express.js server.
   - `server/controllers`: Contains controllers to handle different API endpoints and business logic.
   - `server/models`: Defines the Mongoose models for database operations.
   - `server/routes`: Contains the routes for various API endpoints.

## API Endpoints

The Hostel Issue application exposes the following API endpoints:

1. `POST /api/users/register`: Registers a new user.
2. `POST /api/users/login`: Logs in an existing user.
3. `GET /api/complaints`: Retrieves all complaints.
4. `POST /api/complaints`: Submits a new complaint.
5. `PUT /api/complaints/:id`: Updates the status of a complaint (for administrators).
6. `DELETE /api/complaints/:id`: Deletes a resolved complaint (for users).

## Authentication

The application uses JSON Web Tokens (JWT) for user authentication. When a user logs in successfully, they receive a JWT, which is then included in the headers of subsequent API requests for authentication.

## Database Schema

The MongoDB database schema consists of two main collections:

1. **users:**
   - `id`: Unique user identifier.
   - `name`: Name of the user.
   - `email`: User's email address.
   - `password`: Encrypted password.
   - `role`: Role of the user (either "user" or "admin").

2. **complaints:**
   - `id`: Unique complaint identifier.
   - `userId`: Foreign key linking the complaint to a user.
   - `description`: Description of the complaint.
   - `category`: Category of the complaint.
   - `status`: Status of the complaint (e.g., "pending", "in progress", "resolved").

Sure, here's the installation guide for your project:

## Installation

### Prerequisites

Before you start, make sure you have the following software installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB

### Clone the Repository

1. Fork the project on GitHub (if you haven't done it already).
2. Open your terminal or command prompt.
3. Change the current working directory to the location where you want to store the project.
4. Clone the repository using the following command:
   
   ```
   git clone https://github.com/your-username/hostel-issue.git
   ```

### Setup the Server

1. Change the directory to the server folder:
   
   ```
   cd hostel-issue/server
   ```

2. Install server dependencies using npm:
   
   ```
   npm install
   ```

3. Create a `.env` file in the `server` directory and set the required environment variables (e.g., MongoDB connection string, any secret keys, etc.):

   ```
   MONGODB_URI=mongodb://localhost:27017/hostel-issue
   SECRET_KEY=your_secret_key_here
   ```

4. Run the server using nodemon:
   
   ```
   nodemon index.js
   ```

### Setup the Client

1. Change the directory to the client folder:
   
   ```
   cd ../client
   ```

2. Install client dependencies using npm:
   
   ```
   npm install
   ```

3. Run the client using npm:
   
   ```
   npm start
   ```

### Accessing the Application

Once both the server and client are running successfully, you can access the application by visiting `http://localhost:3000` in your web browser. The React app should load, and you can start using your Hostel Issue application.

Remember to have MongoDB running on your system, and ensure that the connection string in the `.env` file is correct. If you face any issues during the installation process, refer to the project documentation or feel free to ask for further assistance.

## Usage

The Hostel Issue web application is designed to be user-friendly, serving both hostel residents and administrators efficiently. Below is a guide on how to use the web-app from the perspective of both parties:

### For Hostel Residents

1. **Register or Log In:** If you are a new user, click on the "Register" button to create an account. Otherwise, log in using your existing credentials.

2. **Dashboard Overview:** Upon logging in, you will be redirected to the dashboard, where you can view the list of existing complaints and their status.

3. **Submitting a New Complaint:** To submit a new complaint, click on the "New Complaint" button. Provide a clear and concise description of the issue you are facing, and select an appropriate category for the complaint (e.g., maintenance, facilities, noise, etc.).

4. **Viewing Complaint Status:** After submitting a complaint, you can track its progress on the dashboard. The status will be updated in real-time as administrators work on resolving the issue.

5. **Deleting Resolved Complaints:** Once an administrator marks a complaint as resolved, you have the option to delete the complaint from your dashboard. This feature helps maintain a clean interface and shows only active issues.

### For Administrators

1. **Log In:** Administrators can log in using their specific credentials to access the admin dashboard.

2. **Admin Dashboard Overview:** The admin dashboard provides an overview of all complaints submitted by hostel residents.

3. **Managing Complaints:** Administrators can view the list of complaints, their descriptions, and the respective categories. They can also see the status of each complaint, whether it's pending, in progress, or resolved.

4. **Labeling Resolved Complaints:** Once an administrator resolves a complaint, they can label it as "Completed" in the system. This helps keep track of resolved issues and simplifies the management process.

5. **Responding to Residents:** If required, administrators can communicate with hostel residents directly through the app, updating them on the status of their complaints or requesting additional information.

6. **Dashboard Filters:** The admin dashboard may offer various filters to sort and prioritize complaints based on their severity or urgency, making it easier to handle a large number of issues.

**Note:** It's essential for both hostel residents and administrators to maintain the confidentiality of login credentials to ensure the security of the web application.
