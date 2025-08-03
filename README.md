
# 📘 VocabMemo

**VocabMemo** is a sleek, modern vocabulary memorization web app built with **React**, **Redux**, and **Firebase**. It allows users to create language pairs, take vocabulary tests, track their performance history, and access it from anywhere through secure authentication.

---

## 🚀 Features

- 🔐 **Firebase Authentication**: Secure user login and signup.
- 📚 **Vocabulary Management**: Add custom word pairs in multiple languages.
- 🧠 **Test Mode**: Practice translations between language pairs in an interactive test.
- 📊 **Results History**: Track your past test scores, accuracy, and date.
- ☁️ **Cloud Persistence**: All user data is saved and retrieved using Firestore.
- 🧭 **Modern UI/UX**: Intuitive navigation with a clean, responsive design.

---

## 🧱 Tech Stack

- **Frontend**: React + Redux Toolkit + Tailwind CSS
- **Backend/Database**: Firebase Auth + Firestore
- **Routing**: React Router DOM
- **State Management**: Redux Toolkit

---

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nahom-ketsela/vocabulary-memo.git
   cd vocab-memo-app


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   * Create a Firebase project: [https://console.firebase.google.com](https://console.firebase.google.com)
   * Enable **Authentication (Email/Password)** and **Cloud Firestore**
   * Copy your Firebase config into a `.env` file:

     ```
     VITE_FIREBASE_API_KEY=your_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## 🛠 Project Structure

```
src/
│
├── app/                 # Redux store
├── components/          # Navbar, Footer, ProtectedRoute, etc.
├── contexts/            # AuthContext (Firebase Auth)
├── features/            # Redux slices (vocabulary, test)
├── pages/               # Login, Signup, Landing, Test, Results, Dashboard
├── firebase.js          # Firebase config & initialization
└── App.jsx              # Route definitions
```

---

## ✅ Firebase Rules (Required)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /results/{resultId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.uid;
    }
  }
}
```



## 🤝 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/awesome`
3. Commit your changes: `git commit -m "feat: add awesome feature"`
4. Push to the branch: `git push origin feature/awesome`
5. Open a pull request


## 🌐 Live Demo

> deployed with [Vercel](https://vocabulary-memo-mocha.vercel.app/) 

---


