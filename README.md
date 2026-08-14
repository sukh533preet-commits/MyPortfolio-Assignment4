# COMP229 Assignment 3 – Full Stack Portfolio

Includes JWT authentication, Sign Up/Sign In/Sign Out, protected React routes, React state-managed forms, frontend/backend API integration, MongoDB persistence, CRUD for Contacts/Projects/Qualifications, and User/Admin roles.

## Setup
1. Copy `.env.example` to `.env` and enter your MongoDB URI and JWT secret.
2. Copy `client/.env.example` to `client/.env`.
3. Run `npm run install-all`.
4. Run `npm run seed-admin` to create the admin account.
5. Run `npm run dev`.

Frontend: http://localhost:5173  
Backend: http://localhost:3000

Normal users can sign up, sign in, and view the portfolio. Admin users see **Admin CRUD** and can create, update, and delete contacts, projects, and qualifications.
