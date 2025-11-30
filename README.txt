Serenity Knight Riders - Simple Website (Dark Knight Theme)

Files included:
- index.html
- style.css
- script.js
- data.js  <-- Edit this file to update players, schedule, groups, points
- /assets/logo.png  <-- Team logo (already included)

HOW TO EDIT PLAYERS / IMAGES / STATS
1) Put player images in the assets/ folder (example names used in data.js: harsh.jpg, yash.jpg, aryan.jpg, rahul.jpg).
2) Open data.js and edit the DATA object. Update players array, schedule, groups or points.
3) Save and re-upload the folder to your host (Netlify/Vercel/GitHub Pages) or simply refresh the page (if running locally).

HOW TO DEPLOY FOR FREE
A) Netlify
 - Go to https://app.netlify.com/drop
 - Drag & drop the ZIP file or the entire folder
 - Site will be published with a free netlify.app URL

B) Vercel
 - Visit https://vercel.com/new
 - Import the folder (select 'Static Site' if asked)
 - Deploy (free link provided)

C) GitHub Pages
 - Create a public GitHub repo, push the files, enable GitHub Pages in repo settings.

UPDATING SCORES / POINTS DURING TOURNAMENT
- Edit data.js and change the schedule.result value and DATA.points array
- If you want non-technical updates, ask someone to copy-paste new JSON lines into data.js (it's simple text editing)

SECURITY NOTES
- This site is static and contains no login or database — very safe for hosting on Netlify/Vercel.
- Do NOT host sensitive files (private docs) here.
