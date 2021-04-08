function myFunc() {
    var a = result.value;
    var b = res.value;
    var c = "";
    if (sel.value == "multiply") {
        tab.innerHTML = c;
        for(var i = 1; i <= a; i++) {
            c += '<tr>'
            for(var j = 1; j <= b; j++) {
        
                c += "<td>" + j + "*" + i + "=" + j * i + " " + "</td>"
                console.log( j + "*" + i + "=" + j * i + " " );
                
            }
            c += '</tr>'
        }
    }else if (sel.value == "div") {
        tab.innerHTML = c;
        for(var i = 1; i <= a; i++) {
            c += '<tr>'
            for(var j = 1; j <= b; j++) {

                c += "<td>" + j + "/" + i + "=" + j/i + " " + "</td>"
                console.log( j + "/" + i + "=" + j/i + " " );
                
            }
            c+= '</tr>'
        }
    }else if (sel.value == "add") {
        tab.innerHTML = c;
        for(var i = 1; i <= a; i++) {
            c += '<tr>'
            for(var j = 1; j <= b; j++) {

                c += "<td>" + j + "+" + i + "=" + eval(j + i) + " " + "</td>"
                console.log(j + "+" + i + "=" + eval(j + i) + " "  );
            }
            c+= '</tr>'
        }
    }else if (sel.value == "sub") {
        for(var i = 1; i <= a; i++) {
            c += '<tr>'
            for(var j = 1; j <= b; j++) {
                
                c += "<td>" + j + "-" + i + "=" + eval(j - i) + " " + "</td>"
                console.log(j + "-" + i + "=" + eval(j - i) + " " );
            }
        }
        c+= '</tr>'

    }
    tab.innerHTML = c;

}
