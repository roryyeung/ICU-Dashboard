export { createDataTable }

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