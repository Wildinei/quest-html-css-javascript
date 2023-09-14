const inputTexto = document.querySelectorAll('.input');
const botao = document.querySelector('.btn');

botao.addEventListener('click', (evento) => {
    inputTexto.forEach((input) => {
        
        evento.preventDefault()
        
        if(input.value == ""){
            input.classList.remove('verde')
            input.classList.add('vermelho')
            input.nextElementSibling.classList.remove
            ('mostrar')
            
        }else {
            input.classList.remove('vermelho')
            input.nextElementSibling.classList.add('mostrar')
            input.classList.add('verde')
        }
    })
})