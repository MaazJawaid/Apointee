# Doctor Appointment Booking System Documentation

## Project Overview

This is a complete doctor appointment booking system built using the **MUNCHECK stack** (MongoDB, Node.js, React, Express.js, Cloudinary). The platform allows users to choose from different doctors, book appointments, and make cash payments. It features an **Admin Panel** with two logins: one for the admin and one for doctors. Doctors can manage their appointments, view their earnings, and update appointment statuses, while admins have full control over the platform, including managing doctors and viewing all appointments in real-time.

---

## Live Demo

- **Frontend**: [Link to demo]
- **Admin Panel (Admin Login)**: [Link to Admin Panel]
  - **Email**: admin@example.com
  - **Password**: admin123
- **Admin Panel (Doctor Login)**: [Link to Doctor Panel]
  - **Email**: doctor@example.com
  - **Password**: doctor123

---

## Features

### User Features

- **Browse Doctors**: Users can select from a variety of doctors based on specialty.
- **Book Appointments**: Users can select a doctor, choose a time slot, and book an appointment.
- **User Authentication**: Secure login for users and doctors.
- **Real-Time Appointment Updates**: Users can track the status of their appointments.
- **Cash Payments**: Appointments are paid for using cash only at the time of the visit.

### Doctor Features

- **View Appointments**: Doctors can see all upcoming appointments.
- **Manage Appointments**: Doctors can approve, cancel, or mark appointments as completed.
- **View Earnings**: Doctors can see their total earnings from appointments.
- **Appointment Status**: Doctors can update the status of appointments in real-time.
- **Real-Time Updates**: The doctor’s panel is updated in real-time with new appointments and changes.

### Admin Features

- **Doctor Management**: Admins can add, remove, or update doctor profiles.
- **Appointment Overview**: Admins can view all appointments across all doctors.
- **Real-Time Dashboard**: The admin panel shows real-time updates on appointments, status changes, and earnings for each doctor.
- **View Doctor Earnings**: Admins can track the earnings of each doctor.
- **User Management**: Admins can manage users (view, delete).
- **Manage Payment**: Admins can view transaction details and track payment statuses.

---

## Tech Stack

- **Frontend**: React.js (with Hooks and Context API)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose)
- **Cloud Storage**: Cloudinary for image and file management
- **Payment Gateways**: Stripe, Razorpay
- **Authentication**: JWT (JSON Web Tokens)
- **Admin Panel**: Real-time management interface for doctors and admins

---

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (latest version) - [Node.js Download](https://nodejs.org/en/download/)
- **MongoDB** - For local setup or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based database.
- **Cloudinary Account** - For storing profile and appointment-related images ([Cloudinary](https://cloudinary.com/))

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/doctor-appointment-project.git
cd doctor-appointment-project
```

### 2. Backend Setup

1. Open the project folder in VS Code.
2. Open Integrated Terminal:
   - Right-click on the `backend` folder > Select **"Open in Integrated Terminal"**.
3. Run the following command to install dependencies:

```sh
npm install
```

4. **Setup Cloudinary for file storage:**

   - Create an account and log in at [Cloudinary](https://cloudinary.com/).
   - Go to the **Dashboard**.
   - Copy and paste the **Cloud Name**, **API Key**, and **Secret Key** into the `backend/.env` file.

5. **Setup MongoDB:**

   - Open the MongoDB [link](https://mongodb.com/).
   - Copy the **MongoDB Connection String** and paste it into `backend/.env`, replacing `<password>` with your password.

6. **Run the Backend**

```sh
npm run server
```

> **Ensure the backend is running before starting the frontend or admin panel.**

---

### 3. Frontend Setup

1. Right-click on the `frontend` folder > Select **"Open in Integrated Terminal"**.
2. Install dependencies:

```sh
npm install
```

3. Start the frontend server:

```sh
npm run dev
```

4. Open the provided URL in a browser (default: `http://localhost:5173`).

5. All the images and the initial meta data about doctors is in asset folder in frontend folder `ecom-frontend/src/assets` use the assets.js file to upload the initial data use a script or manually upload the data of doctors.


---

### 4. Admin Panel Setup

1. Right-click on the `admin` folder > Select **"Open in Integrated Terminal"**.
2. Install dependencies:

```sh
npm install
```

3. Start the admin panel:

```sh
npm run dev
```

4. Open the provided URL in a browser (default: `http://localhost:5174`).

5. **Admin Login**: Use the admin credentials provided to access the dashboard and manage doctors and appointments.

---

## Contributing

We welcome contributions! If you'd like to contribute, please fork the repository, create a new branch, make your changes, and submit a pull request.

---
