# Tomato

"Tomato" is a full-stack web application designed for online food ordering, leveraging the MERN stack to provide a seamless and intuitive user experience. The platform includes comprehensive features for both users and administrators, ensuring efficient food ordering and management processes.

## Website Preview
<img width="929" alt="pic login" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/5fb685eb-5762-4809-a585-7f2d6b91010f">
<img width="946" alt="pic 1" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/c243b83b-5d4a-4a37-912f-f37073a593fd">
<img width="935" alt="pic 2" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/2a0ad29a-6971-4445-98ea-ee7f0e6aa80b">
<img width="943" alt="pic 3" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/6e8af2b0-0524-4429-8be8-be7ec5b9c5b2">
<img width="923" alt="pic 4" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/8c366595-fbb8-4db9-9d09-0a00feba02e1">
<img width="922" alt="pic 5" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/003a1589-9b42-4e03-943a-eb5070f461e5">
<img width="934" alt="pic 6" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/6b972de7-4540-4037-88af-d882cc0905fe">
<img width="921" alt="pic 7" src="https://github.com/Simandhar14/tomato-food-mern/assets/121376696/78bfef73-1979-4f5a-bc0a-ec99797c4f81">

## Features of the Project

- **User Interface:**
  - Users can browse available food items, view details, and add items to their cart.
  - The interface features a sliding mechanism for effortless browsing of food categories.
  - Additional items can be accessed by navigating through the shop section.
  - Users must log in to access the website, and new users can sign up for an account.
  - The interface incorporates user authentication, including Google Sign-In via Firebase.

- **Admin Interface:**
  - Access to the admin dashboard requires users to log in with existing credentials or sign up for an account.
  - Within the admin dashboard, users can manage food items by editing their details.
  - Each food item includes essential information such as the item name, description, price, and image URL.
  - Admins can edit these details for existing food items.
  - Additionally, admins can upload new food items or delete existing ones.
  - Logout functionality is conveniently available within the dashboard interface.

## Tech Stack

- **MongoDB:**
  - MongoDB serves as the database management system, storing various data related to food items available on the platform, such as names, descriptions, prices, and image URLs. MongoDB's flexibility allows for storing this data without a fixed schema, accommodating the diverse nature of food item information.

- **React:**
  - React is utilized for building the frontend of the food ordering website. It enables the creation of interactive user interfaces, allowing users to seamlessly browse through available food items, view item details, and interact with the platform's features. React's component-based architecture facilitates the development of reusable UI components, ensuring consistency and efficiency across the website.

- **Node.js:**
  - Node.js powers the backend of the project, handling server-side logic and communication with the database. It enables the implementation of features such as user authentication, food item management, and API endpoints for frontend-backend interaction. Node.js's event-driven, non-blocking I/O model ensures the efficient handling of concurrent operations, making the website responsive and scalable.
- **Express:**
  - Express complements Node.js by providing a minimalist web framework for building server-side applications and APIs. In this project, Express is used to define routes, middleware, and other backend functionalities. It simplifies the process of handling HTTP requests, processing data, and generating responses. Express's lightweight nature and extensive middleware ecosystem streamline backend development, accelerating the creation of a robust backend infrastructure for the food ordering platform.

## Contribute to the Project

- Take a look at the existing [Issues]<!--(https://github.com/Simandhar14/tomato-food-mern)--> or [create a new issue]<!--(https://github.com/Simandhar14/tomato-food-mern/issues/new/choose)-->!
- [Fork the Repo]<!--(https://github.com/Simandhar14/tomato-food-mern/fork)-->, create a branch for any issue that you are working on and commit your work.
- Create a **[Pull Request]<!--(https://github.com/Simandhar14/tomato-food-mern/compare)-->** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes that are included in your commits.
## How to Contribute ?

**1.** Start by making a fork of the [**Tomato-Food-Mern**]<!--(https://github.com/Simandhar14/tomato-food-mern)--> repository. Click on the fork  symbol at the top right corner.

**2.** Clone your new fork of the repository:

```bash
git clone https://github.com/<your-github-username>/tomato-food-mern
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/Simandhar14/tomato-food-mern.git
```

**4.** Navigate to the new project directory:

```bash
cd tomato-food-mern
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or local repository with the origin repository:

- In your forked repository click on "Fetch upstream"
- Click "Fetch and merge".

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:

```bash
git add .
```

```bash
git commit -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**11.** **Congratulations!** You've made your first contribution! 🙌🏼
