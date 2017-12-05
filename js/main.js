document.addEventListener("DOMContentLoaded", function(event) { 
    
});

function calQuan(){
    var sizeA = document.getElementById("input-size-a").value;
    var quanA = document.getElementById("input-quan-a").value;
    var sizeB = document.getElementById("input-size-b").value;
    document.getElementById("input-quan-b").value = (sizeB*quanA)/sizeA;
}

function clearAll(){
    document.getElementById("input-size-a").value = "";
    document.getElementById("input-size-b").value = "";
    document.getElementById("input-quan-a").value = "";
    document.getElementById("input-quan-b").value = "";
}