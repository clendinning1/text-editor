## specific to do:
- WHEN I run `npm run start` from the root directory THEN I find that my application should start up the backend and serve the client
- WHEN I run my webpack plugins THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application THEN I find that the text editor still functions in the browser without errors
- WHEN I enter content and subsequently click off of the DOM window THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button THEN I download my web application as an icon on my desktop
- WHEN I load my web application THEN I should have a registered service worker using workbox
- WHEN I register a service worker THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Render THEN I should have proper build scripts for a webpack application

## things showed in mockup:
- registered service worker in the browser

### criteria:
* The application works without an internet connection

* Automatically saves content inside the text editor when the DOM window is unfocused

* Create a service worker with workbox that Caches static assets

* Application deployed to Render at live URL with build scripts

* write readme