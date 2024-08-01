# News Verse

News Verse is a web application that provides real-time news updates based on various categories and countries. The application uses the RapidAPI service to fetch and display news articles, allowing users to search for news and view articles in an infinite scroll format.

## Features

- **Category-Based News**: Fetch and display news articles based on different categories like Technology, Health, Sports, etc.
- **Search Functionality**: Search for news articles based on user queries.
- **Infinite Scrolling**: Load more articles as the user scrolls down.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **RapidAPI**: To fetch news articles.
- **React Infinite Scroll Component**: For implementing infinite scrolling.

## Installation

### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.

### Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project and add your RapidAPI key:

   ```plaintext
   VITE_NEWS_API_KEY=your-rapidapi-key
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- **Search for News**: Use the search bar to find news articles based on your query.
- **View Articles**: Browse articles in various categories with infinite scrolling.
- **Filter by Category**: Select different news categories to view relevant articles.

## Folder Structure

- **`src/components/`**: Contains reusable components like `NewsItem`, `SearchBar`, `Spinner`, and `ErrorMsg`.
- **`src/App.jsx`**: Main application component that sets up routing.



