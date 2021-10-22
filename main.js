const links = {
    instagram: "gabi_colpas",
    linkedin: "gabriela-camargo-005625219",
    github: "GabrielaColpas"
}

function changeSocialMedia(){
    for(let li of socialLinks.children){
        const social = li.getAttribute("class")
        li.children[0].href=`https://www.${social}.com/${links[social]}`
    }
}

changeSocialMedia()

function getGitHubProfileInfos(){
    const url =`https://api.github.com/users/${links.github}`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
        })
}
getGitHubProfileInfos()
