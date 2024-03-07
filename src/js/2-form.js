const formElem = document.querySelector('.feedback-form');
formElem.addEventListener('input', (e) => {
    const email = formElem.elements.email.value;
    const message = formElem.elements.message.value;
    const data = {
        email,
        message,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
    console.log(data);
})

function loadData() {
    const jsonData = localStorage.getItem('feedback-form-state')
    const data = JSON.parse(jsonData)
    formElem.elements.email.value = data?.email || '';
    formElem.elements.message.value = data?.message || '';
}
loadData();

formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formElem.elements.email.value;
    const message = formElem.elements.message.value;
    const data = {
        email,
        message,
    }
    console.log(data);
    formElem.reset();
    localStorage.removeItem('feedback-form-state');
    
})
