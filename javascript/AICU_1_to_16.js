// Tempoary Data for Page Design
let liveAnnouncement = 'This string is the first placeholder string. It will be replaced by an API once we have real announcements.';
/*
let testData = {
        beds1to16 : {
            bed1 : {
                data1 : A,
                data2 : B,
                data3 : C
            },
            bed2 : {
                data1 : A,
                data2 : B,
                data3 : C
            }
        }
    }
*/
// Link to the live elements
let announcements = document.getElementById('announcements-text');
let bedsTable = document.getElementById('beds_1to16');

// function to create HTML table from JSON from: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm

// Event handler functions for the live data
function readAnnouncements() {
    // Lets create a test message
    var date = new Date(); /* creating object of Date class */
    var sec = date.getSeconds();
    announcements.innerText = `${liveAnnouncement} If this number is changing, the page is live: ${sec}`;
};

function readBedsTable() {
    bedsTable.innerText = "Test Data";
};


// Call the functions to initialise
setInterval(readAnnouncements, 1000);
setInterval(readBedsTable, 1000);