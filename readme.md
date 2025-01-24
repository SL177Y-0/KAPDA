# KAPDA-ecom
This project is an End-to-End E-commerce website for a clothing store, built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse and shop for various clothing items, manage their cart, and complete purchases with a seamless user experience. The application also provides an admin panel for store owners to manage inventory, view orders, and track sales.


Technologies Used
- MongoDB: NoSQL database used to store user and product data.
- Express: Web framework for building the back-end RESTful API.
- React: Front-end library used to build the user interface.
- Node.js: JavaScript runtime for building the server-side application.
- Redux: State management library for managing user and cart data.
- JWT (JSON Web Token): Used for user authentication and secure session management.
- Stripe: Payment gateway integration for processing payments.
- Bcrypt.js: Password hashing for secure user authentication.
- Cloudinary: For managing and storing product images.


Installation
Prerequisites
- Node.js (v14 or higher)
- MongoDB (locally or using a cloud service like MongoDB Atlas)
- Stripe account (for payment integration)
- Cloudinary account (for image storage)

General Features
- Responsive Design: Fully responsive design for mobile, tablet, and desktop users.
- Search and Filters: Search bar and filters to easily find products based on categories, size, color, etc.
- Product Ratings & Reviews: Customers can leave reviews and rate products based on their experience.
- Wishlist: Users can save products to their wishlist for future purchases.
- Security: Password hashing, JWT authentication, and secure payment handling.
---
## Folder Structure
```
|-- admin/       # Admin panel application (React)
|-- frontend/    # User-facing website (React)
|-- backend/     # API and server logic (Node.js & Express)
```

## Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

## Installation and Setup
Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/SL177Y-0/KAPDA
cd KAPDA
```

### 2. Set Up Environment Variables
Create a `.env` file in the `backend` folder with the following variables:
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
```

### 3. Install Dependencies
Navigate to each folder (`admin`, `frontend`, `backend`) and install dependencies:

```bash
cd admin
npm install

cd ../frontend
npm install

cd ../backend
npm install
```

### 4. Start the Applications
Run the following commands in separate terminal windows:

- Start the **Backend** server:
  ```bash
  cd backend
  npm run dev
  ```

- Start the **Frontend** application:
  ```bash
  cd frontend
  npm start
  ```

- Start the **Admin Panel**:
  ```bash
  cd admin
  npm start
  ```

### 5. Access the Applications
- Frontend: Open [http://localhost:3000](http://localhost:3000) in your browser.
- Admin Panel: Open [http://localhost:3001](http://localhost:3001) in your browser.
- Backend: Runs on [http://localhost:5000](http://localhost:5000).

## Scripts
Each folder has predefined scripts:

- **Frontend/Admin**:
  - `npm start`: Start the development server
  - `npm run build`: Build for production

- **Backend**:
  - `npm run dev`: Start the server in development mode
  - `npm start`: Start the server in production mode

## Contribution
Feel free to fork this repository and submit pull requests. Contributions are welcome!
---

