# Country Data Application

This application displays data about countries and consists of two parts: the backend and the frontend.

## Features

- Display country-specific data such as name, flag, region, population and borders.
- Fetches data from external APIs.

## Technologies

- **JavaScript**
- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **APIs used**:
  - [Date Nager API](https://date.nager.at/).
  - [Countries Now API](https://countriesnow.space/).

## Setup

### Frontend

1. Navigate to the `frontend` directory.
2. Install the necessary dependencies:

   `npm install`

3. Create a `.env` file with the following content:

   `REACT_APP_API_URL=http://localhost:3001/`

4. Start the frontend development server:

   `npm start`

### Backend

1. Navigate to the `backend` directory.
2. Install the necessary dependencies:

   `npm install`

3. Create a `.env` file with the following content:

```
   PORT=3001
   DATE_NAGER_BASE_URL=https://date.nager.at/api/v3/
   COUNTRIES_NOW_BASE_URL=https://countriesnow.space/api/v0.1/
```

4. Start the backend server:

   `npm start`

## Usage

1. Start both the frontend and backend servers.
2. Open the application in your browser at `http://localhost:3000`.
3. Browse the country data!
