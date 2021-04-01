
Code Louisville JavaScript project

Golden Anniversary Hits website 
project for Code Louisville by Rick Sweeney

This project utilizes the follow technology.

* Header with navigation options vertically aligned.  But via @media queries, switches to horizontal alignment for the navigation options beneath the header when viewport increases to 769px, and moves the navigation options to the same line as the header name when viewport sizes increases to 1025px and higher.

* Banner uses CSS @keyframes and :hover pseudo-class to animate logo when pointer hovers over it. (add ontouchmove to html property for iphone recognition of :hover with tap)

* Main content section with a "calendar" of monthly hits:

       * demonstrates use of flexbox to expand vertical mobile alignment into rows as increased viewport space allows.


ADDITIONAL JAVASCRIPT:

* Main content section with a "calendar" of monthly hits:

       * demonstrates use of a JavaScript 'for' loop to access an array in order to adhere to D.R.Y. programming and eliminate repetitive code.

* Reads and parses a json array from an external "about.json" file, displaying  data from that into the section providing more info about the hits. (The json content I stored in the array is taken from Wikipedia pages for each song.)

* Implements a regular expression (regex) to ensure an email input field is always entered the same format.

* Creates a form to accept an input email address and saves the value (on click of Submit button) to an external file on Google Sheets.   This was accomplished with the creation of an API via SheetDB.io.   This feature requires this webpage to be hosted on a local server or an external server to work.

   Note: The storage of data can be viewed using link provided in project submission form, which confirms where that information is being stored and that it’s being saved/persisted.

    Thanks to fellow student Virginia Swift for letting me know about sheetDB.io.  Worked like a charm!   


Thanks also to Michael Wrock and Izaak Prats for all the teaching and assistance they provided in this Code Louisville javascript course.

This site is strictly for my own educational purposes and will be hosted temporarily.  No claims are made by me to the content provided.