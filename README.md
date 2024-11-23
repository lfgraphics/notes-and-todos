# Todo-and-Notes Desktop Application

This is a **Todo and Notes Desktop Application** built using **Electron.js**, **Next.js**, **Tailwind CSS**, and **PostgreSQL** with **Drizzle ORM**. This application aims to provide a seamless, intuitive, and customizable note-taking and task management experience for users.

## Key Features

- **Dark Theme**: A dark theme option is available for a comfortable experience, especially during late hours.
- **Always on Display & On Top**: The application can be pinned to be always on top of other windows for quick and easy access.
- **Resizable Window**: Resize the application window to suit your workspace layout.
- **Fade Effect When Not in Focus**: The app window fades slightly when not focused, ensuring a distraction-free experience.
- **Split View**: Open a note and a todo list side by side for increased productivity.
- **Multiple Todo Lists and Notes**: Create multiple todo lists and notes, perfect for organizing different projects or tasks.
- **CRUD Operations**: Notes and todos can be created, updated, and deleted after confirmation.
- **Real-Time Sharing**: Share notes or todos with others with real-time updates using WebSockets.
- **Customizable UI Styles**: Change colors, fonts, background images, and other UI elements for a personalized experience.
- **Quick Search**: Search for notes or todos quickly with a powerful built-in search bar.
- **Reminder Notifications**: Set reminders for tasks or notes, with native desktop notifications to keep you on track.
- **Keyboard Shortcuts**: Utilize keyboard shortcuts for quick actions such as creating notes, switching views, or enabling dark mode.
- **Offline Sync**: Work offline, and synchronize changes once the internet is available again.
- **Rich Text Editor**: Format notes using a rich text editor, supporting bold, italics, bullet points, and more.
- **Tagging and Filtering**: Use tags to categorize notes and todos for better organization and filtering.
- **Drag-and-Drop Support**: Easily rearrange notes or todos using drag-and-drop functionality.
- **Export to PDF**: Export notes or todo lists as PDF files for sharing or archiving.
- **Backup and Restore**: Backup your notes and todos and restore them whenever necessary to prevent data loss.
- **Voice Note Integration**: Record and add voice notes for easy reference.

## Technologies Used

- **Electron.js**: Provides the framework to build the desktop application using web technologies.
- **Next.js**: Frontend framework for building a dynamic user interface with server-side rendering.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive UI development.
- **PostgreSQL**: Used as the primary database for storing notes and todos.
- **Drizzle ORM**: An intuitive and type-safe ORM for managing database interactions.
- **Express.js**: Backend framework used to create APIs for CRUD operations.
- **Socket.io**: Used for real-time sharing of notes and todos.

## How to Run the Application

### Prerequisites
- **Node.js** and **npm** must be installed.
- **PostgreSQL** server should be running locally or remotely.

### Steps to Run
1. **Clone the Repository**:
   ```sh
   git clone [https://github.com/lfgraphics/notes-and-todos.git](https://github.com/lfgraphics/notes-and-todos.git)
   cd todo-and-notes
   ```
2. **Install Dependencies**:
   ```sh
   npm install
   cd frontend
   npm install
   ```
3. **Run Backend and Frontend**:
   - **Backend** (Express API):
     ```sh
     npm run start-backend
     ```
   - **Frontend** (Next.js):
     ```sh
     npm run dev
     ```
4. **Start Electron**:
   - Go back to the root directory and run:
     ```sh
     npm start
     ```

## Contribution

Contributions are welcome! Please feel free to submit a pull request or file an issue for feature suggestions and improvements.

## License

This project is licensed under the MIT License.

