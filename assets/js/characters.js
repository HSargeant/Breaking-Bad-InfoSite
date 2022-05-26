//character info
fetch(`https://www.breakingbadapi.com/api/characters?category=Breaking+Bad`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let spotlight1 = data[Math.floor(Math.random()*data.length)]
            document.querySelector("#spot1").src = spotlight1.img
            document.querySelector("#spotname").innerText=spotlight1.name
            document.querySelector(".spotdob").innerText=spotlight1.birthday
            document.querySelector(".spotstatus").innerText=spotlight1.status
            document.querySelector(".spotactor").innerText=spotlight1.portrayed
            document.querySelector(".spotnickname").innerText=spotlight1.nickname
            let linkName = (spotlight1.name)
            linkName = (wikiLink(linkName))
            document.querySelector(".spotmoreInfo").href = `https://breakingbad.fandom.com/wiki/${linkName}`

            for(i=0; i<data.length; i++){
                const option =document.createElement('option')
                option.value = data[i].name
                option.innerHTML = data[i].name
                document.querySelector('.characterList').appendChild(option)
            }
            ///choose characters from a dropdowm menu
            //put info into the dom
            document.querySelector('.characterList').addEventListener('change',event=>{
                data.forEach((element,i) => {
                    if(data[i].name==event.target.value){
                    document.querySelector("#spotlightChar").classList.add("hide")
                    document.querySelector("#banner").classList.remove("hide")
                    document.querySelector("#name").innerText=data[i].name
                    document.querySelector(".dob").innerText=data[i].birthday
                    document.querySelector(".status").innerText=data[i].status
                    document.querySelector(".actor").innerText=data[i].portrayed
                    document.querySelector(".nickname").innerText=data[i].nickname
                    document.querySelector(".characterPhoto").src=data[i].img
                    let oc=""
                    let spotoc=""
                    for(j=0; j<data[i].occupation.length; j++){
                        oc=oc+`${data[i].occupation[j]}`
                        document.querySelector(".occupation").innerText=oc
                        document.querySelector(".spotoccupation").innerText=spotoc
                        oc+=", "
                    }

                        let seasons=""
                    for(j=0; j<data[i].appearance.length; j++){
                        seasons=seasons+`${data[i].appearance[j]}`
                        document.querySelector(".seasons").innerText=seasons
                        seasons+=", "
                    }

                    // LINK TO WIKI
                    let linkName = (data[i].name)
                    linkName = (wikiLink(linkName))
                    document.querySelector(".moreInfo").href = `https://breakingbad.fandom.com/wiki/${linkName}`

                    // death count
                    let link = (document.querySelector("#name").innerHTML).split(" ")
                    let deathCount=link[0]
                    for(i=1; i<link.length; i++){
                        deathCount +=`+${link[i]}`

                    }
                    let url2 = `https://www.breakingbadapi.com/api/death-count?name=${deathCount}`
            
                    fetch(url2)
                    .then(res=>res.json())
                    .then(data=>{
                        
                        document.querySelector(".cname").innerText = data[0].deathCount
                    })

                }  
            })            
        })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

function wikiLink(linkName){

        switch(linkName){
            case "Henry Schrader":
                linkName = "Hank_Schrader"
                break
            case "Group Leader":
                linkName = "Group_Leader_(Breaking_Bad)"
                break
            case "Marco & Leonel Salamanca":
                linkName = "The_Cousins"
                break
            case "Brandon Mayhew":
                linkName= "Badger"
                break
            case "Theodore Beneke":
                linkName = "Ted_Beneke"
                break
            case "Officer Saxon":
                linkName = 'Saxton'
                break
            case "Pamela":
                linkName = 'Pamela_Orbic'
                break
            case "SAC Ramey":
                linkName = "Ramey"
                break
            case "Wendy_S.":
                linkName = "Wendy"
                break
            case "Christian Ortgea":
                linkName = "Combo"
                break
            case "Elliot Schwartz":
                linkName = "Elliott_Schwartz"
            
            default:
                linkName=(linkName).split(" ").join("_")
        }

        return linkName

    }

const picture = document.querySelector("#BBImg")

let walterWhite= "images/WaltS5.jpg"

let jesse='images/JesseS5.jpg'

let skyler='images/Skyler_S5b.jpg'

let waltJr = 'https://static.wikia.nocookie.net/breakingbad/images/e/e7/WaltJrS5.jpg/'

let saul='images/BCS_S3_JimmyMcGill.jpg'

let mike = 'images/BCS_S3_MikeEhrmantraut.jpg'

let gus = 'images/BCS_S4_Gustavo_Fring.jpg'

let hank='images/HankS5.jpg'

let badger='https://static.wikia.nocookie.net/breakingbad/images/5/5b/Cast_bb_800x600_badger.jpg/'

let fly = 'https://static.wikia.nocookie.net/breakingbad/images/1/13/Flyglidingoverall.png/'

let hector = "images/Hector_BCS.jpg"


document.querySelector("button").addEventListener("click", getFetch) //add event listener to submit button

async function getFetch() {  
  let url = `https://breakingbadapi.com/api/quote/random?series=Breaking+Bad`
    
   await fetch(url)  // get pic from API
      .then(res => res.json())
      .then(data => {    // place pic into the document


        document.querySelector('h1').innerText = data[0].author
        document.querySelector('p').innerText = data[0].quote
        document.querySelector('p').style.borderColor = 'white'
        const img = document.querySelector('#BBImg')
          
  switch(data[0].author){
    case 'Walter White':
      img.src=walterWhite
        break

    case 'Skyler White':
      img.src=skyler
        break
    case 'Mike Ehrmantraut':
      img.src=mike
        break
    case 'Hank Schrader':
      img.src=hank
        break
    case 'Gus Fring':
      img.src=gus
        break
    case 'Jesse Pinkman':
      img.src=jesse
        break
    case 'Walter White Jr.':
      img.src=waltJr
        break
    case 'Badger':
        img.src=badger
          break
    case 'fly':
      img.src=fly
      break

    case 'Jimmy McGill':
      img.src=saul
      break
    case 'Saul Goodman':
      img.src=saul
      break
    case "Hector Salamanca":
      img.src= hector
      break
    default:
      img.src=""
        
    }
      })
      .catch(err => {
        console.log(`error ${err}`)
    })
}