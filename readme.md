# Form Elements Demo & Automated Tester

This project consists of two main components:

-   `form-elements.html`: A single-page web application that demonstrates various HTML form elements within a modern, dark-themed UI. It features an interactive event log that provides real-time feedback on user interactions.
-   `form-elements-tester.user.js`: A Tampermonkey script designed to automate the testing of all interactive elements on the `form-elements.html` page.
-   `form-elements-automated-tester.js`: A Tampermonkey script designed to automate the testing of all interactive elements on the `form-elements.html` page.

## `form-elements.html` Features

-   **Modern UI**: A clean, responsive, dark-themed design using CSS variables for easy customization.
-   **Semantic HTML**: Utilizes modern HTML5 elements like `<fieldset>`, `<legend>`, and `<details>` for better structure and accessibility.
-   **Interactive Event Log**: A dedicated panel displays detailed information about user actions (clicks, changes, submissions) in real-time.
-   **Efficient JavaScript**: Employs modern JavaScript practices, including event delegation, to handle user interactions efficiently.

## `form-elements-automated-tester.js` Features

-   **Automated UI Testing**: Injects a "Run Automated Test" button onto the page for easy execution.
-   **Controlled Execution**: Allows you to trigger the test sequence manually.
-   **Comprehensive Coverage**: Interacts with every form element, including text inputs, labels, checkboxes, radio buttons, select dropdowns, and buttons.
-   **Visual Feedback**: Pauses between actions, allowing you to observe the results in the page's Event Log and verify that all event listeners are working correctly.

---

## Setup and Usage

To run this project and see the automated tester in action, follow these steps.

### Prerequisites

-   [**Visual Studio Code**](https://code.visualstudio.com/): A modern code editor.
-   **A modern web browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, etc.

### Step 1: Serve the HTML File with Live Server

First, you need to serve the `form-elements.html` file from a local web server. The Tampermonkey script is configured to run on `http://127.0.0.1:5500`, which is the default for the popular VS Code extension **Live Server**.

1.  **Install Live Server**:
    -   Open Visual Studio Code.
    -   Go to the **Extensions** view (or press `Ctrl+Shift+X`).
    -   Search for `Live Server` (by Ritwick Dey) or `Five Server` and click **Install**.

2.  **Start the Server**:
    -   Open the folder containing `form-elements.html` in VS Code.
    -   In the Explorer panel, right-click on the `form-elements.html` file.
    -   Select **Open with Live Server**.

Your browser will automatically open a new tab with the page, typically at `http://127.0.0.1:5500/form-elements.html`. Keep this tab open.

### Step 2: Install the Tampermonkey Script

Next, you need to install the user script into your browser using the Tampermonkey extension.

1.  **Install Tampermonkey**:
    -   Open your web browser.
    -   Go to the official [**Tampermonkey**](https://www.tampermonkey.net/) website or install it directly for your browser from the links below:
        -   [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
        -   [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
        -   [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
        -   [Safari](https://apps.apple.com/app/apple-store/id1482490089)

2.  **Create the User Script**:
    -   Click the Tampermonkey icon in your browser's toolbar and select **Dashboard**.
    -   Navigate to the **`+`** tab to create a new script.
    -   Delete the default template content in the editor.
    -   Open the `form-elements-automated-tester.js` file in a text editor, and copy its entire contents.
    -   Paste the copied code into the Tampermonkey editor.
    -   Save the script (File > Save, or `Ctrl+S`).

### Step 3: Run the Automated Test

1.  **Navigate to the Page**: Go to the `http://127.0.0.1:5500/form-elements.html` tab that was opened by Live Server. If you closed it, open it again.

2.  **Verify the Script**: You should see a new green **Run Automated Test** button in the "Form Actions" section. This confirms that Tampermonkey has successfully injected the script onto the page.

3.  **Execute the Test**: Click the **Run Automated Test** button.

4.  **Observe**: Watch as the script automatically interacts with each form element. The actions will be logged in the "Event Log" panel on the right, demonstrating that the page's event listeners are working as expected.