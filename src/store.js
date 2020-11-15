if(screen.width<=768) {
    document.getElementById("comp1-prod-view").classList.remove("row");
    document.getElementById("comp1-img1").classList.remove("col-6");
    document.getElementById("sub-imgs").classList.remove("col-2");
    document.getElementById("prod-info").classList.remove("col-4");
}
if(screen.width>768) {
    document.getElementById("comp1-prod-view").classList.add("row");
    document.getElementById("comp1-img1").classList.add("col-6");
    document.getElementById("sub-imgs").classList.add("col-2");
    document.getElementById("prod-info").classList.add("col-4");
}
window.addEventListener("resize",function (){
    if(screen.width<=768) {
        document.getElementById("comp1-prod-view").classList.remove("row");
        document.getElementById("comp1-img1").classList.remove("col-6");
        document.getElementById("sub-imgs").classList.remove("col-2");
        document.getElementById("prod-info").classList.remove("col-4");
    }
    if(screen.width>768) {
        document.getElementById("comp1-prod-view").classList.add("row");
        document.getElementById("comp1-img1").classList.add("col-6");
        document.getElementById("sub-imgs").classList.add("col-2");
        document.getElementById("prod-info").classList.add("col-4");
    }
})
