window.addEventListener('load', () => {

    const form = document.getElementById('formulario')
    const nombres = document.getElementById('nombres')
    const celular = document.getElementById('celular')
    const correo = document.getElementById('correo')
    const mensaje = document.getElementById('mensaje')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        
        //Capturar los valores ingresados por el usuario
        const nombresValor = nombres.value.trim()
        const celularValor = celular.value.trim()
        const correoValor = correo.value.trim()
        const mensajeValor = mensaje.value.trim();


        //Validando el campo nombres
        const er = /[^0-9]/  

        if (!nombresValor) {
            validaFalla(nombres, 'Campo vacío')
        } else if (!nombresValor.match(er)) {
            validaFalla(nombres, 'Introduce nombres válidos')
        } else {
            validaOk(nombres)
        }
  
       
        //Validando el campo celular
        if (!celularValor) {
            validaFalla(celular, 'Campo vacío')
        } else if (celularValor.length>9) {
            validaFalla(celular, 'El número de celular debe contener 9 dígitos.')
        } else if (isNaN(celularValor)){
            validaFalla(celular, 'El celular ingresado no es un número')
        } else if (celularValor.length<9) {
            validaFalla(celular, 'El número de celular debe contener 9 dígitos.')
        } else {
            validaOk(celular)
        }


        //Validando el campo correo
        if (!correoValor) {
            validaFalla(correo, 'Campo vacío')
        } else if (!validaCorreo(correoValor)) {
            validaFalla(correo, 'El e-mail no es válido')
        } else {
            validaOk(correo)
        }

         //Validando el campo mensaje
         if (!mensajeValor) {
            validaFalla(mensaje, 'Campo vacío')
        } else {
            validaOk(mensaje)
        }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
        
    }

    const validaCorreo = (correo) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
    }
})