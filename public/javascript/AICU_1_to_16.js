// Tempoary Data for Page Design
let liveAnnouncement = 'This string is the first placeholder string. It will be replaced by an API once we have real announcements.';

let testData = [{
                "name" : "Bed 1",
                "data1" : "A",
                "data2" : "B",
                "HCA Requested" : "C"
                },
                {
                "name" : "Bed 2",
                "data1" : "A",
                "data2" : "B",
                "HCA Requested" : "C"
                }]

// Link to the live elements
let announcements = document.getElementById('announcements-text');
let bedsTable = document.getElementById('beds_1to16');

// Event handler functions for the live data
function readAnnouncements() {
    // Lets create a test message
    var date = new Date(); /* creating object of Date class */
    var sec = date.getSeconds();
    announcements.innerText = `${liveAnnouncement} If this number is changing, the page is live: ${sec}`;
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
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    bedsTable.innerHTML = "";
    bedsTable.appendChild(table);     
};
// Call the functions to initialise
setInterval(readAnnouncements, 1000);
setInterval(readBedsTable, 1000);