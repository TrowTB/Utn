var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contacto');
});

router.post('/', async (req, res, next) => {
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var mensaje = req.body.mensaje;

    var obj = {
        to: 'branlolero@gmail.com',
        subject: 'CONTACTO WEB',
        html: nombre + " se contactó a través de la web y quiere más información a este correo : " + email + ". <br> Además, hizo este comentario : " + mensaje + ". <br> Su tel es: " + tel
    };

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        var info = await transport.sendMail(obj);
        res.render('contacto', {
            message: 'Mensaje enviado correctamente'
        });
    } catch (error) {
        console.log("Error al enviar el correo:", error);
        res.render('contacto', {
            message: 'Ocurrió un error al enviar el mensaje'
        });
    }
});

module.exports = router;