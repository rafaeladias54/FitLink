function myFunction() {
    var input, filter, ul, li, a, i, no, results;
    no = false
    results = document.getElementById("noResults");
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            no = true
        } else {
            li[i].style.display = "none";
        }
    }

    if (no) {
        results.style.display = "none"
    }
    else {
        results.style.display = ""
    }
}