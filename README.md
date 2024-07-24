# Alarm Clock App

A simple alarm clock application built using Lightning Web Components (LWC), deployed to a Salesforce org, and displayed on an LWR (Lightning Web Runtime) site.

### Features

- Set an alarm time using a user-friendly interface.
- Display the current time and update it every second.
- Trigger an alert when the alarm goes off.
- Clear the alarm with a single button click.

### Technologies Used

-  Lightning Web Components (LWC)
-  Salesforce DX 
-  HTML 
-  CSS 
-  JavaScript 

### Installation

#### Prerequisites

- Salesforce CLI: Install Salesforce CLI
- Git: Install Git

### Steps

1.  Clone the Repository :
   ```
   git clone https://github.com/yourusername/alarm-clock-app.git
   cd alarm-clock-app
   ```
2. Authorize Your Salesforce Org:
   ```
   sf org login web userName --alias
    ```
   
4. set default org :
   ```
   sf config set targetorg userName/alias
   ```

6. Deploy the LWC Component:
   ```
   sf  project deploy start -d force-app/main/default/lwc
   ```

8. Open the Org:
   ```
   sf org open
   ```

### Usage

 1. Navigate to the LWR Site:
   - Open Experience Builder in your Salesforce org.
   - Add the alarmClock component to the desired page.
   - Save and publish the site.
     
 2. Set the Alarm:
   - Use the input field to set the desired alarm time.
   - Click the “Set Alarm” button to activate the alarm.
   - An alert will trigger at the set time.
   
