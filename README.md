# Wild Oasis Application

![Wild Oasis App Screenshot](/public/wildOasis.png)

## Description

WildOasis is a React-based application built on Vite (version 4) that interacts with Supabase API to manage internal hotel operations. The app is designed for hotel staff to fetch, display, add, delete, and update data related to hotel management.

## Features

- **Data Fetching**: Retrieve hotel-related data from the Supabase API.
- **Data Display**: Present the fetched data in an organized and intuitive manner.
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on hotel data.
- **User Authentication**: Secure login system for hotel staff.
- **Data Filtering**: Filter data based on specific criteria.

## Technology Stack

- **React.js**: Frontend framework for building user interfaces.
- **Styled Components**: For styling components and layouts.
- **Supabase**: Backend service used for database and API management.
- **Context API**: For local state management across the application.
- **React Query**: For handling global state and server-side data fetching.

## Folder Structure

The folder structure of the WildOasis App is organized as follows:

- **/public**: Contains public assets such as images.
- **/src**: Contains the React components, application logic, and API handling files.
  - **/src/pages**: Page components for different views of the application.
  - **/src/services**: Service modules for handling API requests.
  - **/src/ui**: Reusable UI components.
  - **/src/utils**: Utility functions and helper modules.
  - **/src/features**: Contains feature-specific logic and components.
  - **/src/context**: Context providers and related logic for state management.
  - **/src/hooks**: Custom React hooks for reusable logic.

## Installation

To install and run the WildOasis App locally, follow these steps:

1. **Clone the Repository**  
   Clone the repository from GitHub:

   ```bash
   git clone https://github.com/rb0298/WildOasis.git
   ```

2. **Install Dependencies**
   npm install

3. **To start the development server:**
   npm run dev

## Deployed

The application is deployed and can be accessed at:

[https://giggle-bay.vercel.app](WildOasis)

**Login Credentials:**

- **Email**: rb@yahoo.com
- **Password**: rb@yahoo.com
