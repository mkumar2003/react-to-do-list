# Todo App

This is a simple Todo List application built with React. It allows users to add, remove, and mark tasks as completed. Additionally, it offers sorting and filtering options.

## Features
- Add tasks
- Remove tasks
- Mark tasks as completed
- Task input validation
- Dynamic task display
- Optional sorting (alphabetical)
- Optional filtering (all, completed, incomplete)
- LocalStorage integration

## Setup

1. Clone the repository:
    ```bash
    git clone <YOUR_GITHUB_REPO_URL>
    cd todo-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Testing Guidance

1. **Start the Development Server**:
    - Ensure the application loads and displays the Todo List interface.

2. **Add Tasks**:
    - Enter text in the input field and click "Add Task".
    - Verify that the task appears in the list.

3. **Remove Tasks**:
    - Click the "Remove" button next to a task.
    - Verify that the task is removed from the list.

4. **Mark Tasks as Completed**:
    - Click the checkbox next to a task to toggle its completion status.
    - Verify that the task moves to the "Completed Tasks" section and is displayed in green font.

5. **Filter Tasks**:
    - Use the filter dropdown to display "All", "Completed", or "Incomplete" tasks.
    - Verify that the list updates correctly based on the filter.

6. **Sort Tasks**:
    - Use the sort dropdown to sort tasks alphabetically.
    - Verify that the tasks are sorted correctly.

7. **LocalStorage Integration**:
    - Add, remove, and complete tasks.
    - Refresh the page and verify that the tasks persist.


- `src/`
  - `App.js`: Main component of the application.
  - `App.css`: Styles for the application.
  - `index.js`: Entry point of the application.

