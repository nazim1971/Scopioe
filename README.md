
Here's the revised README file with the login credentials at the top:

---

# Dynamic Therapist App

A dynamic web application to search for therapists by location and login using Google or email.

## Login Credentials for Testing

- **Email:** nazim10@gmail.com
- **Password:** Nazim123

## Live Link

[Dynamic Therapist App](https://scopioe-87a37.web.app/)

## Features

- Search therapists by location
- Login via Google
- Manual email login

## How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/therapist-app.git
cd therapist-app
```

### 2. Set Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Register your app with Firebase.
4. Get your Firebase configuration object.

### 3. Create `.env.local` File

In the root directory of your project, create a `.env.local` file and add the following environment variables with the values from your Firebase app:

```
VITE_APIKEY=your-api-key
VITE_AUTHDOMAIN=your-auth-domain
VITE_PROJECTID=your-project-id
VITE_STORAGEBUCKET=your-storage-bucket
VITE_MESSAGINGSENDERID=your-messaging-sender-id
VITE_APPID=your-app-id
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Application

```bash
npm run dev
```

---

Feel free to modify the live link and repository link as needed.
