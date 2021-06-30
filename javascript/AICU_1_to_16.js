import React from 'react'
import ReactDOM from 'react-dom'

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "/Data/Announcement.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                 document.querySelector("announcements-text").value = allText;
            }
        }
    }
    rawFile.send(null);
}
setInterval(readTextFile, 1000);