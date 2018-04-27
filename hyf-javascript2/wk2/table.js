var studentInfo = [
    {
        StudentID: "12334", 
        StudentName: "John Doe", 
        Education: "BA", 
        City:  "Atlanta", 
        StudentPic: "JohnDoe.jpg"
    },
    {
        StudentID: "12f34", 
        StudentName: "Jane Doe", 
        Education: "BA", 
        City:  "LA", 
        StudentPic: "JohnDoe.jpg"
    },
    {
        StudentID: "12224", 
        StudentName: "Jim Bob", 
        Education: "MA", 
        City:  "Paris", 
        StudentPic: "JohnDoe.jpg"
    }    
];



function dynamicTable(array){

        var table = document.createElement('TABLE');
        document.body.appendChild(table);

        var tableRow = document.createElement('TR');
        table.appendChild(tableRow);
        

        for (var key in array[0]){
            var heading = document.createElement('TH');
            var headingText = document.createTextNode(key);
            heading.appendChild(headingText);
            table.appendChild(heading);
        }
    
  
    for (var i = 0; i < array.length; i++){
        
            var nextTableRow = document.createElement('TR');
            table.appendChild(nextTableRow);
            
            for (var key in array[i]){
                if (key == "StudentPic"){
                    var studentIMG = document.createElement('IMG');
                    studentIMG.setAttribute("src", array[i][key]);
                    nextTableRow.appendChild(studentIMG);
                } else {
                    var dataRow = document.createElement('TD');
                    var dataText = document.createTextNode(array[i][key]);
                    dataRow.appendChild(dataText);
                    nextTableRow.appendChild(dataRow);
                }
        }
    }


    
}

dynamicTable(studentInfo);

