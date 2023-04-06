const btn = document.querySelector('button')
const btn2 = document.querySelector('#endPoint')

const clickHandler = () => alert('The cat name is: Rascal')
const clickHandler2 = () => axios.get('/api/endpoint').then(res => alert(res.data))


btn.addEventListener('click', clickHandler)
btn2.addEventListener('click', clickHandler2)