//eshint version:6

const express= require(express);

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"bmicalculator.html");
});
