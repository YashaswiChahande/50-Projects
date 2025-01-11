//window is top level object in js & keydown is a keyboard event,(e) is an event object
const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {

    insert.innerHTML = `<div class="key">
            ${event.key === ' ' ? 'space' : event.key }
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>`


    console.log(e)


})