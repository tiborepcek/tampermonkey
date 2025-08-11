// ==UserScript==
// @name         Form Elements Automated Tester
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automates testing of all interactive elements on the form-elements.html page.
// @author       Tibor Repcek
// @match        http://127.0.0.1:5500/form-elements.html
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    /**
     * A simple promise-based delay function.
     * @param {number} ms - The number of milliseconds to wait.
     * @returns {Promise<void>}
     */
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    /**
     * The main asynchronous function that runs the entire test sequence.
     */
    async function runAutomatedTest() {
        console.log('--- Starting Automated Test ---');
        const testButton = document.getElementById('run-automated-test-btn');
        testButton.disabled = true;
        testButton.textContent = 'Test Running...';

        /**
         * A helper function to wrap each test step. It logs the action to the
         * console, performs the action, and then waits for a set duration.
         * @param {string} description - A description of the test step for logging.
         * @param {Function} action - The function to execute for the test step.
         */
        const performStep = async (description, action) => {
            console.log(`[TEST] ==> ${description}`);
            action();
            await sleep(1500); // Wait 1.5 seconds to observe the result in the log
        };

        try {
            // Step 1: Interact with the text input via its label and then type
            await performStep('Clicking label for "name" input', () => {
                document.querySelector('label[for="name"]').click();
            });
            await performStep('Typing into "name" input', () => {
                const nameInput = document.getElementById('name');
                nameInput.value = 'Automated Tester';
                nameInput.dispatchEvent(new Event('input', { bubbles: true })); // Simulate user typing
            });

            // Step 2: Toggle the checkbox on and off
            await performStep('Checking "terms" checkbox', () => document.getElementById('terms').click());
            await performStep('Unchecking "terms" checkbox', () => document.getElementById('terms').click());
            await performStep('Checking "terms" checkbox again (for submission)', () => document.getElementById('terms').click());

            // Step 3: Interact with radio buttons
            await performStep('Selecting "No" for subscribe radio', () => document.getElementById('no').click());
            await performStep('Selecting "Yes" for subscribe radio', () => document.getElementById('yes').click());

            // Step 4: Change the value of the select dropdown
            await performStep('Changing select dropdown to "Option 2"', () => {
                const select = document.getElementById('options');
                select.value = '2';
                select.dispatchEvent(new Event('change', { bubbles: true })); // Manually trigger change event
            });

            // Step 5: Toggle the details element
            await performStep('Opening details section', () => document.querySelector('details > summary').click());
            await performStep('Closing details section', () => document.querySelector('details > summary').click());

            // Step 6: Trigger the form submission (which is prevented by the page script)
            await performStep('Clicking Submit button', () => document.querySelector('input[type="submit"]').click());

            // Step 7: Clear the event log
            await performStep('Clicking Clear Log button', () => document.getElementById('clear-log-btn').click());

            // Step 8: Re-populate a field and then reset the form
            await performStep('Setting name input before reset', () => {
                document.getElementById('name').value = 'This will be cleared';
            });
            await performStep('Clicking Reset button', () => document.querySelector('input[type="reset"]').click());

        } catch (error) {
            console.error("An error occurred during the test:", error);
            alert("Automated test failed. Check the console for details.");
        } finally {
            console.log('--- Automated Test Complete ---');
            alert('Automated test finished!');
            testButton.disabled = false;
            testButton.textContent = 'Run Automated Test';
        }
    }

    /**
     * Creates and injects the "Run Test" button into the form's button group.
     */
    function addTestButton() {
        const buttonGroup = document.querySelector('.button-group');
        if (buttonGroup) {
            const testButton = document.createElement('button');
            testButton.textContent = 'Run Automated Test';
            testButton.id = 'run-automated-test-btn';
            testButton.type = 'button'; // Ensure it doesn't interfere with form submission
            // Style to match the page's aesthetic but stand out
            testButton.style.backgroundColor = '#28a745'; // A distinct green
            testButton.addEventListener('mouseenter', () => testButton.style.backgroundColor = '#218838');
            testButton.addEventListener('mouseleave', () => testButton.style.backgroundColor = '#28a745');

            testButton.addEventListener('click', runAutomatedTest);
            buttonGroup.appendChild(testButton);
        }
    }

    // The script starts by adding the button once the page is ready.
    addTestButton();
})();