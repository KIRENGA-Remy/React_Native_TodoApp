# ToDo App 📋

This is a **ToDo App** built using [Expo](https://expo.dev) and React Native. It helps users manage their tasks efficiently with a simple and user-friendly interface.

---

## Features 🚀

- **Add, View, and Delete Tasks:** Easily add new tasks, view the task list, and remove completed or unwanted tasks.
- **Mark as Complete:** Mark tasks as complete to track progress.
- **Category Management:** Organize tasks into categories (e.g., Work, Personal, Study).
- **Search Functionality:** Quickly find tasks using a search bar.
- **Persistent Storage:** Save tasks locally using AsyncStorage so they persist across app sessions.
- **Responsive Design:** Fully optimized for devices of all screen sizes.
- **Dark Mode Support:** Toggle between light and dark themes for better usability.
- **Cross-Platform:** Runs seamlessly on Android, iOS, and Web.

---

## Folder Structure 🗂️

```plaintext
ToDoApp/
├── src/
│   ├── components/       # Reusable components (e.g., TaskItem, Button)
│   ├── screens/          # App screens (e.g., HomeScreen, AddTaskScreen)
│   ├── context/          # State management using Context API
│   ├── styles/           # Shared styles and themes
│   └── utils/            # Utility functions (e.g., formatDate, sortTasks)
├── assets/               # Images, icons, fonts, etc.
├── App.js                # Entry point
├── package.json          # Project configuration
├── README.md             # Documentation
└── .gitignore            # Files to ignore in version control
Getting Started 🎉
Follow these steps to get the app up and running on your device.

Prerequisites
Node.js installed (v14 or higher recommended)

npm or yarn as your package manager

Expo CLI installed globally. Install it with:

bash
Copy
Edit
npm install -g expo-cli
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/KIRENGA-Remy/React_Native_TodoApp.git
Navigate into the project directory:

bash
Copy
Edit
cd todo-app
Install dependencies:

bash
Copy
Edit
npm install
Running the App
Start the app using Expo:

bash
Copy
Edit
npx expo start
You'll see options in the terminal to open the app:

On your device: Scan the QR code using the Expo Go app.
On an emulator/simulator: Open the app in an Android Emulator or iOS Simulator.
On the web: Press w to open the app in a browser.
Usage 🛠️
Add Tasks
Go to the Add Task screen.
Enter task details (name, category, due date, etc.).
Tap Save Task.
Manage Tasks
View tasks on the Home Screen.
Swipe left on a task to delete it.
Tap a task to mark it as complete.
Search Tasks
Use the search bar to find tasks by name or category.

Future Enhancements 🚀
Notifications: Set reminders for due tasks.
Priority Levels: Assign priorities to tasks (Low, Medium, High).
Cloud Sync: Sync tasks across devices using cloud storage.
Drag and Drop: Reorder tasks with drag-and-drop functionality.
Contributing 🤝
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

Steps to Contribute
Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Make your changes.
Commit your changes: git commit -m "Add some feature".
Push to the branch: git push origin feature/your-feature.
Open a pull request.
Learn More 📖
To learn more about developing with Expo and React Native, check out these resources:

Expo Documentation
React Native Documentation
React Navigation
License 📄
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments 🙏
Thanks to Expo and the amazing open-source community for tools and guidance.