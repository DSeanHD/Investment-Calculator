function ans() {
    var p = parseFloat(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseFloat(document.getElementById("years").value);
    var n = parseFloat(document.getElementById("period").value);
    document.getElementById("ans").innerHTML = p * (1 + ((r/100)/n)) ** (n * t);
}
