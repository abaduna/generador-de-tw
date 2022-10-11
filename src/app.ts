type mesage = string
type Title = string
type id = string



interface tweet{
    id: id
    mensaje : mesage
}

interface tweeView{
    id: id
    tweets: tweet[]
}

function createMainTw():tweeView{
    const id = self.crypto.randomUUID() as id
    const tweet = createtwitt() 
    return {
        id,
        tweets: [tweet] 
    }
}
function createtwitt():tweet{
    const id = crypto.randomUUID()
    const mensaje = ""

    return {
        id,
        mensaje
    }
}
function renderview(tweetView:tweeView) {
    let view = document.querySelector("#container"+ tweetView.id)


    if(view){
        view.innerHTML = ""

    }else{
        view = document.createElement("div")
        view.id = "contariner-" + tweetView.id
        view.classList.add("maincontainer")
        document.querySelector("#tweets")?.append(view)
    }
    for(let i = 0; i < tweetView.tweets.length; i++ ){
//renderTweet()
        renderTweet(tweetView, view as HTMLDivElement,tweetView.tweets[i],i === tweetView.tweets.length - 1)

    }
}
function renderTweet(tweetView:tweeView,view:HTMLDivElement,tweet:tweet, last:boolean){
    const tweetContainer = document.createElement("div")
    tweetContainer.id = "container-" + tweet.id
    tweetContainer.classList.add("tweetContainer")

    const form = document.createElement("form")
    form.id = "form-"+ tweet.id
    tweetContainer.appendChild(form)

    const textarea = document.createElement("textarea")
    textarea.id = tweet.id
    textarea.value = tweet.mensaje
    textarea.maxLength = 240 

    const buttonAddMore = document.createElement("button")
    buttonAddMore.classList.add("button", "btn-new")
    buttonAddMore.value = "añada otro tw"
    buttonAddMore.append(document.createTextNode("añadir otro tw"))


    const counterContainer = document.createElement("div")
    counterContainer.classList.add("counterContainer")

          
    //lisenere
    buttonAddMore.addEventListener("click",e =>{
        e.preventDefault();
        const anotttwitt = createtwitt()
        tweetView.tweets.push(anotttwitt)
        renderview(tweetView)
    })
    textarea.addEventListener("input",e =>{
       const value = ( e.target as HTMLTextAreaElement).value
       counterContainer.textContent = value.length.toString()  + "/250"
       updatwit(tweetView,tweet,value)
    })

    form.append(textarea,counterContainer)
    if(last){
        form.appendChild(buttonAddMore)
    }
    view.appendChild(tweetContainer)
}


function  updatwit(tweetView: tweeView,tweet: tweet,value: mesage){
    let ref: tweet | null = null
    for (let index = 0; index < tweetView.tweets.length; index++) {
        const t = tweetView.tweets[index]
        if(t.id === tweet.id){
            ref = t
    }

    }

    
    
    

    if(ref){
        ref.mensaje = value
    }
}

const btnnew = document.querySelector(".btnnew")!

const twestCOntainer = document.querySelector("#twittes")

const twestDate:tweeView[] = []

btnnew.addEventListener("clik",e=>{
    e.preventDefault()
    const newTeitView = createMainTw()
    renderview(newTeitView)
})