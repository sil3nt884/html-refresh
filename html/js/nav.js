
const button = document.getElementsByClassName('buttonContainer')[0]
const sideNav = document.getElementById('sideNav')
const editButton = document.getElementsByClassName('editButton')[0]
const overlay = document.getElementsByClassName('overlay')[0]
const submit = document.getElementById('submit')


document.getElementById('Date').innerText = `Today Date : ${new Date().toISOString().substring(0,10)}`

const lastMood = document.getElementById('Last Mood')
const lastMealTime = document.getElementById('Last Meal Time')
const behaviour = document.getElementById('Behavior')



let clicked = false

button.addEventListener('click', ()=> {
    if(clicked) {
        sideNav.style.display = 'none'
        clicked = false


    }
    else {
        sideNav.style.display = 'block'
        clicked = true
    }
})

editButton.addEventListener('mouseover', ()=> {
    editButton.style.boxShadow= '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'
})

editButton.addEventListener('mouseout', ()=> {
    editButton.style.boxShadow= null
})

editButton.addEventListener('click', ()=> {
    overlay.style.display='none'
})

submit.addEventListener('click', (e)=> {
    e.preventDefault()

    const form = e.target.parentElement.parentElement
    const inputs = Array.from(form.getElementsByClassName('form-control'))
    const textArea = Array.from(form.getElementsByClassName('form-text'))
    const formInputs = [...inputs, ...textArea]

    const body = formInputs
        .map(e => ({[e.id] : e.value}))
        .reduce((a, b) => ({...b, ...a}) )

    console.log(body)
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers : {
            'Content-Type': 'application/json'
        }
    }
    overlay.innerHTML = '<p id="waiting">waiting....</p>'
    overlay.style.display='inline'


    setTimeout(async ()=> {
        await fetch('http://localhost:3000/save', options)
        document.getElementById('waiting').remove()
        lastMood.innerText = `Last Mood: ${body.lastMood}`
        lastMealTime.innerText = `Last Meal Time: ${body.LastMealTime}`
        behaviour.innerText = `${body.behaviorEdit}`
        overlay.style.display='inline'


    }, 0)

})
