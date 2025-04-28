$(document).ready(function () {
    //Comprueba que existe el index para que el slider se cargue solo en el index, y no en
    //la pagina "sobre mi"
    if (window.location.href.indexOf('index') > -1) {
        /*Plugin del Slider*/
        $(function () {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200
            });
        });
    }



    //Comprueba que existe el index para que los post se cargue solo en el index, y no en
    //la pagina "sobre mi"
    if (window.location.href.indexOf('index') > -1) {
        //Post (seran JSON)
        var post = [
            {
                title: 'Beneficios de consumir Manzanas',
                //uso de librera "momentjs"
                date: 'Creado el dia: ' + moment().format('dddd') + ' en ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Comer manzanas ofrece diversos beneficios para la salud, incluyendo la mejora del sistema inmunológico, la reducción del riesgo de enfermedades cardiovasculares, la prevención de la diabetes y el control de problemas digestivos. También pueden ayudar a fortalecer los dientes, mejorar la función cerebral y proporcionar energía.'
            },

            {
                title: 'Beneficios de consumir Murtilla',
                date: 'Creado el dia: ' + moment().format('dddd') + ' en ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Es una fruta silvestre nativa con numerosos beneficios para la salud. Es rica en antioxidantes, antiinflamatorios y analgésicos, y se ha utilizado tradicionalmente para tratar diversas afecciones.' 

            },

            {
                title: 'Beneficios de consumir Arándanos',
                date: 'Creado el dia: ' + moment().format('dddd') + ' en ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Los arándanos ofrecen múltiples beneficios para la salud, incluyendo el fortalecimiento del sistema inmunológico, la mejora de la salud cardiovascular, la reducción del riesgo de diabetes tipo 2, y la prevención de infecciones urinarias.'
            },

            {
                title: 'Beneficios del Changle',
                date: 'Creado el dia: ' + moment().format('dddd') + ' en ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Hongo silvestre comestible, es rico en nutrientes y tiene propiedades medicinales. Es una buena fuente de proteínas, fibra, vitaminas (B1, B2, D2) y minerales (hierro, zinc, potasio, calcio, magnesio).'
            },

            {
                title: 'Beneficios del Maqui',
                date: 'Creado el dia: ' + moment().format('dddd') + ' en ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'El consumo de maqui ofrece numerosos beneficios para la salud, gracias a su alto contenido de antioxidantes, polifenoles y vitamina C.'
            }
        ]

        //Recorriendo los post
        post.forEach((element, index) => {
            var post = `
        <article class="post">
                    <h2>${element.title}</h2>
                    <span class="date">${element.date}</span>
                    <p>
                        ${element.content}
                    </p>
                    <a href="" class="button-more">Leer más</a>
        </article>`;
            console.log(post);

            //Añadiendo los post al html
            $('#post').append(post);
        });
    }

    //Cambiar temas de la web
    var theme = $('#theme')

    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });

    //Scroll para subir al inicio de la pagina
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            //con esto la pagina sube al inicio
            scrollTop: 0
        }, 500);

        return false;

        //con preventDefault y return false se evita que el boton rediriga a otra web
    });


    //Login Falso
    $('#login form').submit(function () {
        var for_name = $('#form_name').val();
        localStorage.setItem('form_name', for_name);
    });
    var form_name = localStorage.getItem('form_name');

    //Solo muestra los datos cuando se inserten en el formulario
    if (form_name != null && form_name != undefined) {
        var about_parrafo = $('#about p');
        about_parrafo.html('<strong>Bienvenido, ' + form_name + '</strong>');
        about_parrafo.append('<a href=# id=logout>Cerrar Sesion </a>');
        $('login').hide();

        //Cierra le sesion falsa
        $('#logout').click(function () {
            localStorage.clear();
            //recarga la pagina
            location.reload();
        });
    }

    //Acordeon
    //Comprueba que existe la pagina about para que el acordeon se cargue solo en la pagina
    //sobre mi y no en la pagina de "index"
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    //Reloj se repite la comprobacion
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }

    //Queda pendiente la validacion del formulario
})