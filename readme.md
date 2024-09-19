Here's a detailed explanation of the functionality of each part of the code:

### `index.html` (Login Page)

**Functionality:**
- **Page Layout**: Displays a login form where users can enter their email and password.
- **JavaScript:**
  - **Form Submission Handling**: 
    - When the login form is submitted, the script prevents the default form submission.
    - Retrieves the email and password entered by the user.
    - Checks if the provided email exists in `localStorage` and if the password matches.
    - If the credentials are valid, it saves the email to `sessionStorage` to keep track of the logged-in user and redirects to `dashboard.html`.
    - If invalid, an alert notifies the user of incorrect credentials.
  - **Display Dashboard**: Redirects to the dashboard page upon successful login.

### `signup.html` (Sign Up Page)

**Functionality:**
- **Page Layout**: Provides a form for users to create a new account by entering their personal information.
- **JavaScript:**
  - **Form Submission Handling**: 
    - When the sign-up form is submitted, the script prevents the default form submission.
    - Collects user information from the form inputs.
    - Stores the collected user data in `localStorage` with the email as the key.
    - Shows an alert confirming successful sign-up and resets the form fields.

### `dashboard.html` (Dashboard Page)

**Functionality:**
- **Page Layout**: Displays user information such as name, email, date of birth, and gender, only visible if the user is logged in.
- **JavaScript:**
  - **Display Dashboard**:
    - Retrieves user data from `sessionStorage` (the logged-in user’s email) and `localStorage` (user details).
    - Displays the user's information on the page and hides the login and sign-up links.
  - **Logout Functionality**:
    - When the logout button is clicked, it removes the logged-in user's email from `sessionStorage`, hides the dashboard content, and shows the login and sign-up links again.
  - **Page Load**:
    - Checks if there is a logged-in user by looking in `sessionStorage`.
    - If a user is logged in, it displays the dashboard with their information. If not, it shows the login and sign-up links.

### `style.css` (Shared CSS File)

**Functionality:**
- **General Styling**:
  - Applies a consistent background color and font family across all pages.
  - Uses flexbox to center the content on the page both horizontally and vertically.
- **Login Page Styles**:
  - Styles the layout and appearance of the login form, including input fields, buttons, and links.
  - Defines colors, padding, margins, and hover effects.
- **Sign Up Page Styles**:
  - Styles the layout and appearance of the sign-up form, including input fields and buttons.
  - Provides spacing and alignment for form elements.
- **Dashboard Page Styles**:
  - Styles the dashboard layout and user information display.
  - Includes button styles and general text formatting.

Overall, the code provides a simple authentication system with login and sign-up functionalities, and a user dashboard that displays after logging in.