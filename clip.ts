const clipboardy = require("clipboardy");
const express = require("express");
const app = express();

app.listen(8081, () => {
  console.log("Application started and Listening on port 8081");
});

app.get("/", (req: any, res: any) => {
  const val = clipboardy.readSync();

  res.send(
    `<html>
    <style>
    *{font-size:70px}
    </style>
   
    <center><button id="search">Search</button></center>
    <body><div>${val}</div><br><br>
    <input type="textarea" value="${escape(val)}" id="myInput"><br><br>
    <button onclick="myFunction()">Copy text</button> <br><br>
     <script>
        var q = document.getElementById("myInput").value;
        document.getElementById('search').onclick = function() {
            window.open('http://google.com/search?q='+q);
        };


    function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
    }
    </script>
    </body></html>`
  );
});
