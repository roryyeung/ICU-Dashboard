 /* Request linestatus data from TFL API https://tfl.gov.uk/info-for/open-data-users/api-documentation */
 var xml_url = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus"

 /* Function to send XML Request */

 var request = new XMLHttpRequest()
 request.open('GET', xml_url)
 request.onload = function () {
                                 // begin accessing JSON data here
                                 }
 request.send()

 /* Functions to extract data from resulting Json */
 function lineStatus(data){
     
 }
 /* Functions to add the variables to the javascript */