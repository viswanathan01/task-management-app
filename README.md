📌 Task Management App
This is a Task Management App built with Next.js, TypeScript, Tailwind CSS, and MongoDB. It allows users to add, mark, and delete tasks in a responsive web interface.

🚀 Features
✅ Add Tasks – Users can create tasks with ease.
✅ Mark as Complete – Click to mark tasks as done.
✅ Delete Tasks – Remove tasks when done.
✅ Responsive UI – Works on all devices.

🔧 Installation & Setup
1️⃣ Clone the Repository
Open your terminal and run:

bash
Copy
Edit
git clone https://github.com/viswanathan01/task-management-app.git
cd task-management-app
2️⃣ Install Dependencies
Run the following command to install all required dependencies:

bash
Copy
Edit
npm install
3️⃣ Set Up the Environment Variables
This project requires a MongoDB connection.

Option 1: Use the default database (if given access by the owner)
Option 2: Use your own MongoDB (Recommended for new users)
📌 If using your own database:

Create a free MongoDB Atlas account → Sign up here
Create a new database cluster
Get your MongoDB connection string
In the project folder, create a .env.local file and add:
bash
Copy
Edit
MONGODB_URI=your-mongodb-connection-string
4️⃣ Run the Development Server
Start the app with:

bash
Copy
Edit
npm run dev
Now, open http://localhost:3000 in your browser to see the app live.

⚠️ Troubleshooting: Can't Add Tasks?
❌ Problem: "I can’t add tasks after cloning the project."
✅ Reason: You are trying to use the owner's database, which does not allow public access.

🔹 Solution
📌 You have 2 options:

1️⃣ Ask the owner to whitelist your IP in MongoDB Atlas. (Easier but less flexible)
2️⃣ Use your own MongoDB database by following step 3️⃣ Set Up the Environment Variables (Recommended for privacy & full control).

🌍 Deployment on Vercel
The easiest way to deploy this app is to use Vercel, the official Next.js deployment platform.

1️⃣ Push your code to GitHub
2️⃣ Sign in to Vercel
3️⃣ Import your GitHub repository
4️⃣ Set your MONGODB_URI in Vercel Environment Variables
5️⃣ Deploy and get your live app URL 🎉

💡 Tech Stack
🔹 Frontend: Next.js (React), TypeScript, Tailwind CSS
🔹 Backend: Next.js API Routes, MongoDB
🔹 Database: MongoDB Atlas

##ScreenShot:

![Screenshot 2025-02-05 103908](https://github.com/user-attachments/assets/9b35de67-fddf-4281-bffd-f27854f0da62)
