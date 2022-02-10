let mainlink = document.getElementById("mainlink")
let setup = document.getElementById("setup")
let anchors = document.getElementsByClassName("linktoembed")
// let website = document.getElementById("websitelink")
// let facebook = document.getElementById("facebooklink")
// let youtube = document.getElementById("youtubelink")
// let website = document.getElementById("twitterlink")
// let website = document.getElementById("githublink")

let sociallinks = document.getElementsByClassName("sociallinks")
let links = {}


let submitbutton = document.getElementById("submitbutton")
submitbutton.addEventListener("click", () => {

    for (let i of sociallinks) {
        links[i.id] = i.value

    }
    localStorage.setItem("links", JSON.stringify(links))
    location.reload()

    checkstorage()
})
checkstorage()
function checkstorage() {
    let linksoficons = JSON.parse(localStorage.getItem("links"))

    console.log(linksoficons)
    if (linksoficons) {
        setup.classList.add("invisible")
        mainlink.classList.remove("invisible")
        console.log("hello")
        for (let i = 0; i < anchors.length; i++) {

            let find = anchors[i].dataset.link

            if (find in linksoficons&&linksoficons[find]!="") {
                anchors[i].href = linksoficons[find]
                anchors[i].setAttribute("title",`Visit My ${find} -> ${linksoficons[find]}`)
            }
            else{
                anchors[i].classList.add("disabled")
                anchors[i].removeAttribute("href")
                anchors[i].setAttribute("title",`You did not provide the ${find}`)
            }

        }
    }
    else {
        console.log("hatbe")
        mainlink.classList.add("invisible")
        setup.classList.remove("invisible")
    }
}

