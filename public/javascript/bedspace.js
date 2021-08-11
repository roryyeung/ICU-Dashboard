// Tempoary Data for Page Design
let liveAnnouncement = 'This string is the first placeholder string. It will be replaced by an API once we have real announcements.';

let testData = [{
                "Patient Name" : "John Smith",
                "Patient Level" : "Level 3",
                "Allergies" : "Penicillin",
                "Airway Precautions" : "Trachy - Reg Hold",
                "Spine" : "No Precautions",
                "NOK" : "Jane Smith",
                "Personal Notes" : "Enjoys Regge and KPop. Has a dog. Has two small children."
                }]
let testEnv = [{
                "Temperature" : 32,
                "Sound" : 84
}]

let testTasks = [{
    "Time" : "12:15",
    "Task" : "Drug Administration"
},
{
    "Time" : "12:24",
    "Task" : "Second Administration"
}]

// Link to the live elements
let patientInfo = document.getElementById('patient-info-table');
let upcomingTasks = document.getElementById('upcoming-tasks-table');
let enviromentData = document.getElementById('enviroment_data');

// Call the functions to initialise
setInterval(()=>{createDataTable(patientInfo,testData)}, 1000);
setInterval(()=>{createDataTable(upcomingTasks,testTasks)}, 1000);
setInterval(()=>{createDataTable(enviromentData,testEnv)}, 1000);

// This function creates the data tables for each dataset
function createDataTable(element,data) {
    // Temp test data inner function
    element.innerText = "Test Data";
    // function to create HTML table from JSON from: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
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
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
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
     for (var i = 0; i < data.length; i++) {

         tr = table.insertRow(-1);

         for (var j = 0; j < col.length; j++) {
             var tabCell = tr.insertCell(-1);
             tabCell.innerHTML = data[i][col[j]];
         }
     }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    element.innerHTML = "";
    element.appendChild(table);     
};