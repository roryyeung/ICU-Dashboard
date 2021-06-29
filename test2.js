var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xml_url = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus"

var request = new XMLHttpRequest();
request.open('GET', xml_url, true);
request.onload = function () {
    var xmlDoc = request.responseXML //save the reply
    var nodetree = xmlDoc.getElementsByTagName("LineStatus") // select the part of the reply stored in "Linestatus"
// The code below selects the status descriptions of the lines and stores them as:
// distStatus, circStatus and hammStatus
    for(i = 0; i < nodetree.length ;i++){
        if(nodetree[i].getElementsByTagName("Line").getAttribute("Name") == "District"){
            var distStatus = nodetree[i].getElementsByTagName("Status").getAttribute("Description");
            console.log(distStatus);
            //document.getElementById("district_status").innerHTML=distStatus;
        }else if(nodetree[i].getElementsByTagName("Line").getAttribute("Name") == "Circle"){
            var circStatus = nodetree[i].getElementsByTagName("Status").getAttribute("Description");
            //document.getElementById("circle_status").innerHTML=circStatus;
        }else if(nodetree[i].getElementsByTagName("Line").getAttribute("Name") == "Hammersmith and City"){
            var hammStatus = nodetree[i].getElementsByTagName("Status").getAttribute("Description");
         //document.getElementById("hammersmith_status").innerHTML=hammStatus;
        }
    }
};
request.send();
