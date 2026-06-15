# DevOverflow

A modern Stack Overflow–inspired Q&A platform built with **Next.js 14**, **TypeScript**, **Appwrite**, **Tailwind CSS**, and **Magic UI**.

Users can ask questions, post answers, vote on content, comment on discussions, and build a knowledge-sharing community.

---

## 🚀 Features

### Authentication

* User registration and login
* Session management with Appwrite Authentication
* Protected routes
* User profiles

### Questions

* Create questions with rich text formatting
* Optional image attachments
* Tag-based categorization
* Edit and delete questions
* Search questions

### Answers

* Post answers to questions
* Edit and delete answers
* Rich text support

### Voting System

* Upvote questions
* Downvote questions
* Upvote answers
* Downvote answers

### Comments

* Add comments to questions
* Add comments to answers

### User Profiles

* View user information
* Reputation tracking
* User activity pages

### UI & UX

* Responsive design
* Dark mode interface
* Animated backgrounds
* Modern UI using Magic UI
* Rich text editor

---

# 🛠 Tech Stack

## Frontend

* Next.js 14 (App Router)
* React
* TypeScript
* Tailwind CSS
* Magic UI
* Zustand

## Backend

* Appwrite

  * Authentication
  * Database
  * Storage

## Deployment

* Vercel

---

# 📂 Project Structure

```bash
src/
│
├── app/
│   ├── questions/
│   ├── users/
│   ├── api/
│   └── components/
│
├── components/
│   ├── ui/
│   ├── magicui/
│   └── shared/
│
├── store/
│   └── Auth.ts
│
├── models/
│   ├── client/
│   └── server/
│
├── utils/
│
└── lib/
```

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID

APPWRITE_API_KEY=YOUR_API_KEY

APPWRITE_DATABASE_ID=main-stackflow

APPWRITE_QUESTION_COLLECTION=questions
APPWRITE_ANSWER_COLLECTION=answers
APPWRITE_COMMENT_COLLECTION=comments
APPWRITE_VOTE_COLLECTION=votes

APPWRITE_QUESTION_BUCKET=question-attachments
```

---

# 🧑‍💻 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/devoverflow.git
```

Move into the project:

```bash
cd devoverflow
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🚀 Deployment

## Deploy on Vercel

1. Push code to GitHub

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

2. Import repository into Vercel

3. Configure environment variables

4. Deploy

---

# 📸 Screenshots

Add screenshots here:

```md
<img width="1920" height="985" alt="Screenshot 2026-06-15 at 4 15 35 PM" src="https://github.com/user-attachments/assets/20322f4f-6691-489c-89a8-6649d8284968" />
<img width="1920" height="987" alt="Screenshot 2026-06-15 at 4 14 58 PM" src="https://github.com/user-attachments/assets/12795728-3e77-472c-b859-705e904a3877" />
<img width="1920" height="990" alt="Screenshot 2026-06-15 at 4 14 41 PM" src="https://github.com/user-attachments/assets/bfa20792-2cb0-48d6-87f0-d85d99f73f1d" />
<img width="920" height="853" alt="Screenshot 2026-06-15 at 4 14 29 PM" src="https://github.com/user-attachments/assets/451bdf62-bc02-4afe-b145-e3ef0e6f754d" />
<img width="1920" height="985" alt="Screenshot 2026-06-15 at 4 14 18 PM" src="https://github.com/user-attachments/assets/8ea887f4-dd6e-4b80-8d53-a312cd3d9064" />

---

# Future Improvements

* Notifications
* AI-powered question suggestions
* Bookmarking
* Badges and achievements
* Real-time updates
* Question recommendations
* Admin dashboard

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

**Shivam Yadav**

Built with ❤️ using Next.js and Appwrite.
