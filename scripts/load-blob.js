function loadBlob(path, destId) {
    let xhr= new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        document.getElementById(destId).innerHTML= this.responseText;
        console.log(document.getElementById(destId).innerHTML);
    };
    xhr.send();
}