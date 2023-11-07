
function submitHandler(e){
    e.preventDefault();
    const input = document.getElementById('email-input');
    const entry = input.value;
    
    if(!entry.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        const error = document.getElementById('label-error');
        
        input.classList.add('error');
        error.classList.add('error');
        error.style.display = 'block';
    } else {
        const email = document.getElementById('email');
        const card = document.getElementById('card');
        const success = document.getElementById('success-card');
        success.style.display = 'flex';
        card.style.display = 'none';
        email.innerHTML = entry;
    }
}

function clickHandler(e){
    e.preventDefault();

    const success = document.getElementById('success-card');
    const card = document.getElementById('card');
    const input = document.getElementById('email-input');
    const error = document.getElementById('label-error');

    input.classList.remove('error');
    input.value = '';
    error.classList.remove('error');
    error.style.display = 'none';

    success.style.display = 'none';
    card.style.display = 'flex';
}

document.getElementById('success-button').onclick = clickHandler;
document.getElementById('form').onsubmit = submitHandler;
