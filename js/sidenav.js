function openNav() {

    if (document.getElementById('mySidenav').style.height == "100%") {
        
        document.getElementById('mySidenav').style.height="0";
        document.getElementById('mySidenav').style.paddingTop="0";
        document.getElementById('message').style.visibility="visible";
    }
    else {
        
        document.getElementById('mySidenav').style.height="100%";
        document.getElementById('mySidenav').style.paddingTop="60px";
        document.getElementById('message').style.visibility="hidden";
    }
}