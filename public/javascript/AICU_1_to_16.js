// Tempoary Data for Page Design
let liveAnnouncement = 'This string is the first placeholder string. It will be replaced by an API once we have real announcements.';

let testData = [{
                "Name" : "Bed 1",
                "Status" : "Level 2",
                "Nurse" : "Name",
                "Infections" : "COVID",
                "Precautions" : "N/A",
                "Last Rolled": "04:00",
                "Help Requested" : "HCA"
                },
                {
                "Name" : "Bed 2",
                "Status" : "Level 2",
                "Nurse" : "Name",
                "Infections" : "C. Diff.",
                "Precautions" : "Airway",
                "Last Rolled": "07:23",
                "Help Requested" : "Cleaner"
                },
                {
                "Name" : "Bed 3",
                "Status" : "Empty",
                "Nurse" : "Name",
                "Infections" : "N/A",
                "Precautions" : "N/A",
                "Last Rolled": "N/A",
                "Help Requested" : "N/A"
                },
                {
                "Name" : "Bed 4",
                "Status" : "Level 3",
                "Nurse" : "N/A",
                "Infections" : "N/A",
                "Precautions" : "N/A",
                "Last Rolled": "Self-Mobilising",
                "Help Requested" : "N/A"
                },
                {
                "Name" : "Bed 5",
                "Status" : "Level 1",
                "Nurse" : "Name",
                "Infections" : "N/A",
                "Precautions" : "N/A",
                "Last Rolled": "04:00",
                "Help Requested" : "N/A"
                },
                {
                "Name" : "Bed 6",
                "Status" : "Level 3",
                "Nurse" : "Name",
                "Infections" : "N/A",
                "Precautions" : "N/A",
                "Last Rolled": "04:00",
                "Help Requested" : "N/A"
                },
                {
                "Name" : "Bed 7",
                "Status" : "Empty",
                "Nurse" : "Name",
                "Infections" : "N/A",
                "Precautions" : "N/A",
                "Last Rolled": "N/A",
                "Help Requested" : "N/A"
                },
                {
                "Name" : "Bed 8",
                "Status" : "Level 2",
                "Nurse" : "Name",
                "Infections" : "N/A",
                "Precautions" : "N/A",
                "Last Rolled": "04:00",
                "Help Requested" : "HA"
                }
            ]

// Link to the live elements
let announcements = document.getElementById('announcements-text');
let bedsTable = document.getElementById('beds_1to16');

// Event handler functions for the live data
function readAnnouncements() {
    // Lets create a test message
    var date = new Date(); /* creating object of Date class */
    var sec = date.getSeconds();
    announcements.innerText = `${liveAnnouncement} If this number is changing, the page is live: ${sec}`;
    // Add the primary_content class
    announcements.classList.add('primary_content');
};

function readBedsTable() {
    // Temp test data inner function
    bedsTable.innerText = "Test Data";
    // function to create HTML table from JSON from: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    for (var i = 0; i < testData.length; i++) {
        for (var key in testData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    
    }
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

        // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < testData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = testData[i][col[j]];
        }
    }
     // CREATE DYNAMIC TABLE.
     var table = document.createElement("table");

     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

     var tr = table.insertRow(-1);                   // TABLE ROW.

     for (var i = 0; i < col.length; i++) {
         var th = document.createElement("th");      // TABLE HEADER.
         th.innerHTML = col[i];
         th.classList.add('header_cell');
         tr.appendChild(th);
     }

     // ADD JSON DATA TO THE TABLE AS ROWS.
     for (var i = 0; i < testData.length; i++) {

         tr = table.insertRow(-1);

         for (var j = 0; j < col.length; j++) {
             var tabCell = tr.insertCell(-1);
             tr.classList.add('row_cell');
             tabCell.innerHTML = testData[i][col[j]];
         }
     }

    
    // Add the primary_table class
    table.classList.add('primary_table');
    
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    bedsTable.innerHTML = "";
    bedsTable.appendChild(table);     
};
// Call the functions to initialise
setInterval(readAnnouncements, 1000);
setInterval(readBedsTable, 1000);