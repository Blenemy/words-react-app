## Developers

- **Front-end**: Denys Topchyi, www.linkedin.com/in/denys-topchyi-4665a4188
- **Back-end**: Kirill Horodiskiy, https://www.linkedin.com/in/kirill-horodiskyi-6324ab1b2/
- **UI/UX Design Web design**: Anastasiia Untilova, https://www.linkedin.com/in/anastasiia-untilova-a4332b231/

# Ukrainian to English Word Learning SP Application

## Overview

This application is designed for learners to study and reinforce their vocabulary skills by translating words from Ukrainian to English. Through an interactive quiz format, users are presented with a word alongside supporting images and an English description. They then select from three possible translations, enhancing retention and engagement.

## Features

- **Quiz System**: Each question provides three possible answers, aiding in knowledge reinforcement.
- **Visual Aids**: Every word is paired with relevant images and an English description, offering contextual cues and enhancing the learning experience.
- **Deck System**: Words are grouped into decks based on themes or difficulty levels, allowing users to target specific vocabulary sets.
- **User Statistics**: Track your progress! Every registered user has access to their personal performance statistics.
- **User Registration**: To avail all features and track progress, users need to register.
- **Comments**: Users can leave comments, fostering a community feel and shared learning experience. These are displayed on the main page.
- **Custom Decks and Cards**: Personalization at its best! Users can create their own decks and cards. They have the ability to upload images, crafting their personal learning journey.
- **Daily Deck Limit**: Users can only complete a deck once a day to ensure effective learning.

## Viewing Recommendations

The project is not optimized for mobile view. For the best user experience, it's recommended to view the website on a PC with a screen width of 1440 pixels.

## Registration and Authentication

To ensure a seamless user experience and maintain user data, our application is hosted on a dedicated server with its own domain. This allows us to provide constant uptime and reliable service.

### Authentication Methods:

- **Google Account**: For users who prefer a quicker registration process, they can simply sign in using their Google accounts. This utilizes OAuth2.0, ensuring data security and swift access.
- **Manual Registration**: For users who prefer traditional registration methods, they can opt for the manual input of their data. This includes providing an email address, setting a password, and verifying their email.

### Security:

All user data, including passwords, are securely stored and encrypted to prevent unauthorized access.

## Technologies Used

### Front-end

- **React.js**: Powers the user interface through its component-based architecture.
- **Redux Toolkit**: Simplifies complex state logic, improves maintainability and optimizes performance.
- **React Router**: Implemented hash routing to enable client-side navigation without full page reloads.
- **Tanstack Query/Mutation**: Utilized for efficiently managing, caching, and syncing asynchronous and remote data. This tool enabled streamlined API requests to the backend, offering features like auto-refetching, background synchronization, and enhanced user experience in data-fetching scenarios.
- **Typescript**: Brings static typing to JavaScript for better linting and error checking.
- **Tailwind CSS**: Offers utility-first CSS framework for rapid UI development.
- **Material/UI components**: Provides React components for faster and simpler web development.
- **Formik**: Used for handling form state and providing validations for the registration form.
- **DropZone**: was employed to facilitate the process of users uploading images to the backend. This ensures an enhanced user experience, allowing users to visually confirm their selections before proceeding with the upload.
- **TransitionGroup/CSSTransition**: Implemented for animating transitions. Specifically used in the application to handle the show/hide animations of comments on the main page
- **Framer motion**: Utilized to enhance the user experience by adding smooth and natural page transition animations.
- **HTML**: Structures the content on the application.
- **SCSS**: Used in specific cases for handling animations and to leverage its advanced features for more intricate styling tasks.
- **Recharts**: Utilized for creating interactive charts.
- **Google Auth**: Allows users to log in using their Google accounts.
- **BlurHash**: Provides smooth image placeholders before the actual image loads.
- **External API for Image Search**: Searches for images based on keywords.
- **REST API**: Fetches and manipulates data from a server, decoupling the frontend and backend.

### Back-end

- **Python**: Serves as the primary programming language for server-side logic.
- **Django**: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **Django Rest Framework**: Provides a powerful and flexible toolkit for building Web APIs in Django.
- **PostgreSQL**: Acts as the primary database to persistently store and manage data with reliability and robust features.
- **Redis**: Used as an in-memory data store to support features like caching and session management, resulting in improved performance.
- **Celery**: An asynchronous task queue/job queue based on distributed message passing for handling time-consuming tasks outside of the main thread of execution.
- **Requests**: A simple HTTP library for Python, used to communicate with external APIs and services.
- **Docker**: Containerizes the application to ensure consistent environments across development, staging, and production setups.
- **Gunicorn**: Serves as the WSGI HTTP server for serving Python applications in a production environment.
- **NGINX**: Employs as a reverse proxy server, routing client requests to the appropriate backend services and providing an additional layer of abstraction and control.
- **JWT Authentication**: Manages secure user authentication using JSON Web Tokens.
- **Swagger/OpenAPI**: Used for documenting the API endpoints, allowing for easier testing and integration for frontend developers.
- **SQLAlchemy**: Optionally included as an ORM for working with databases using Python objects instead of SQL queries.
- **Unit Testing/Pytest**: Ensures code quality and reliability through automated tests.
- **Celery Beat**: Schedules regular tasks using Celery, such as database cleanup and email notifications.
- **Django Channels**: Provides capabilities for handling WebSockets and real-time features in Django applications.
- **API Versioning**: Implements version control to the APIs to manage changes and deprecations gracefully.
- **CORS Headers**: Handles Cross-Origin Resource Sharing, allowing the frontend to securely request resources from the backend.

### Infrastructure

- **Docker Compose**: Used for defining and running multi-container Docker applications, simplifying the configuration and linking of services.
- **CI/CD Pipelines**: Automates the process of testing and deploying the application.
- **AWS/GCP**: Could be utilized for hosting the application and managing cloud resources.
- **Terraform**: Optionally used for infrastructure as code to provision and manage any cloud, infrastructure, or service.
