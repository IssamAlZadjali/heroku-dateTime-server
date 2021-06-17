const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", function (req, res) {  

    const gmtTime = new Date();
    const time = gmtTime.toGMTString(); 
    res.write(time)
    res.end() 

})

app.get("/local", function (req, res) {  

    const localTime = new Date();
    const time_2 = localTime.toLocaleString(); 
    res.write(time_2)
    res.end() 

})

app.listen(PORT, function(error){
    if (error) {
        console.log('Something went wrong ', error)
    } else {
        console.log('Server is listening on port: ' + PORT)
    }
})