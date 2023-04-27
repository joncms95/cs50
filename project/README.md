# CS50 Final Project : Ban Pick Tool 📃
### Video Demo: https://www.youtube.com 🎞️
### Description
The following is my final project created for the HarvardX CS50's Introduction to Computer Science.

### Built With 🛠️
<p style="left-align">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="html">
<img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" alt="css">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="javascript">
<img src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white" alt="python">
<img src="https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white" alt="flask">
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" alt="mongodb">
<img src="https://img.shields.io/badge/Gunicorn-499848.svg?style=for-the-badge&logo=Gunicorn&logoColor=white" alt="gunicorn">
<img src="https://img.shields.io/badge/NGINX-009639.svg?style=for-the-badge&logo=NGINX&logoColor=white" alt="nginx">
</p>

---
## Features
### 1. Create
<ul>
<details><summary>Click to see Create page</summary>
<img src="https://user-images.githubusercontent.com/77521992/231419672-865a00d5-f04b-4cc2-a2ae-dd886d04f605.png" alt="create" width="75%">
</details>
</ul>

- Upon visiting the website, users will land on the draft creation page, where they can enter their team names into two input fields: Blue Team and Red Team.
- If users decide not to input anything into these fields, the page will automatically assign default values of "Team 1" for Blue Team and "Team 2" for Red Team.
- Once the input fields have been filled, users can click on the "create" button to be directed to the links page.

### 2. Links
<ul>
<details><summary>Click to see Links page</summary>
<img src="https://user-images.githubusercontent.com/77521992/231419751-30a06829-fc6c-4d90-bbc7-1a8ab4dcfafb.png" alt="links" width="75%">
</details>
</ul>

- On the links page, users will encounter a similar layout to that of the draft creation page. Users will see three links: one for the blue team's ban pick, one for the red team's ban pick, and one for the spectator link.
- Each link has its own authority: the blue team's link allows them to do their own ban pick, the red team's link allows them to do their own ban pick, and the spectator link only allows users to watch the ban picking process.
- Users can either click the links to open them in a new window or click the "copy" button to copy the links to their clipboard. These links will then lead users to the draft page.

### 3. Draft
<ul>
<details><summary>Click to see Draft page</summary>
<img src="https://user-images.githubusercontent.com/77521992/231419866-e11dc03b-7089-4930-b059-1226d3b67ae7.png" alt="draft" width="75%">
</details>
</ul>

- After clicking the links on the links page, users will be directed to the draft page. Here, users will have a simulation of the Mobile Legends Draft Pick selection phase, similar to those seen in Ranked Game, Custom Draft Pick, or competitive tournaments.
- The header of the page will display the team names and timer, while the bans and picks from each team will be shown below it.
- Further down the page, users will find the search and select button, and the heroes selection list.
- Users from both teams (Blue and Red) will need to click the ready check button to start the ban pick.

## Documentation
### Pre-development phase 💡
- Brainstorming ideas for the Final Project
- Taking inspiration from existing Ban Pick Tools for League of Legends
    1. [Prodraft Pick Ban Tool](http://prodraft.leagueoflegends.com/)
    2. [PentaQ BP Tool](https://data.pentaq.com/BP)
    3. [Draftlol dawe.gg](https://draftlol.dawe.gg/)

### Development phase
#### First Phase
- Collecting related icons and logos assets from sites
- Implementing the create page
- Learning how to use flexbox to set position items correctly
- Adjusting CSS to ensure viewport compatibility for mobile
- Set up flask to run web page and render template on different routes

#### Second Phase
- Implementing the links page
- Learning how to use JavaScript to copy text to clipboard
- Implement copy link function on links page
- Optimising codes
<ul>
<details><summary>Click to see details</summary>
Before

```javascript
// When copy button is clicked, copy link to clipboard
document.getElementById('blue_copy').addEventListener('click', function () {
    let getLink = document.getElementById('blue_link');
    getLink.select();
    navigator.clipboard.writeText(getLink.value);
});

document.getElementById('red_copy').addEventListener('click', function () {
    let getLink = document.getElementById('red_link');
    getLink.select();
    navigator.clipboard.writeText(getLink.value);
});

document.getElementById('spec_copy').addEventListener('click', function () {
    let getLink = document.getElementById('spec_link');
    getLink.select();
    navigator.clipboard.writeText(getLink.value);
});
```

<details><summary>After</summary>

```javascript
// When copy button is clicked, copy link to clipboard
document.querySelectorAll('.copy').forEach(button => {
    button.onclick = () => {
        const getLink = document.getElementById(button.dataset.linkid);
        getLink.select();
        navigator.clipboard.writeText(getLink.value);
    }
});
```
</details>
</ul>

- Added Jinja to create reusable layouts and contents
- Learning how to generate random links to have different ban pick links for different teams
- Generate random draft id and auth id using the uuid module function

#### Third Phase
- Further studies on JavaScript, Python
- Implementing the draft page
<ul>
<details><summary>Click to see the different stages of the draft page</summary
Version 1
<br>
<img src="https://user-images.githubusercontent.com/77521992/228210090-877e30db-7436-4437-b8ae-1b0b20a81fec.png" alt="v1" width="75%">

- Outlining the overall looks of the draft page
- The draft page consists of:
    - ***Team names***, ***timer***, and ***hero bans*** on the header section; and
    - ***Heroes selection list*** in the body section
<br>
<details><summary>Version 2</summary>

<img src="https://user-images.githubusercontent.com/77521992/228210125-eea20764-ddb9-4174-945b-ecf3b063817f.png" alt="v2" width="75%">
    
- Replace the text placeholders for hero bans to circle thumbnails
- Added a subtext below the timer to indicate ban/pick sides
</details>

<details><summary>Version 3</summary>

<img src="https://user-images.githubusercontent.com/77521992/228210137-9d32c895-cf2d-4384-8048-fbeaf4cc4eac.png" alt="v3" width="75%">
    
- Added a grey container to the page for better clarity
</details>

<details><summary>Version 4</summary>

<img src="https://user-images.githubusercontent.com/77521992/228210147-4c367744-f187-420d-9b84-9412bd1bfcfa.png" alt="v4" width="75%">
    
- Replaced the circle thumbnails for hero bans to infoboxes for better styling
</details>

<details><summary>Version 5</summary>

<img src="https://user-images.githubusercontent.com/77521992/228213774-20e459e0-5eee-4cda-9b67-abc57c12736c.png" alt="v5" width="75%">
    
- Enhanced styling for the header of the page
- Added shadows on infoboxes and hero icons
</details>
    
<details><summary>Version 6 (Final Version)</summary>

<img src="https://user-images.githubusercontent.com/77521992/231420359-d3cc7d28-31dc-4a60-b398-008e795b8bff.png" alt="v6 final version" width="75%">

- Final version of the draft page
- Added ban mark overlay for heroes ban
- Added hero name overlay in infoboxes
- Added search function and scroll bar for heroes selection list
- Added highlight bars to indicate ban/ pick turn
</details>
</ul>

- Implementing different sets of functions
    - Timer countdown function
    - Search and select function
    - Filter heroes by role function
    - Initialising the draft state and ban pick functions

#### Fourth Phase
- Further studies on MongoDB to set up database for the app
- Configuring MongoDB to store necessary data for the draft states
- Setting up API calls to retrieve and update data from and to the database
- Setting up web server and domain name on Digital Ocean server
- Deploying/ hosting the application using Gunicorn and Nginx
