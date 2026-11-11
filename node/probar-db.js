const db = require('./bd');
console.log('Archivo cargado:', require.resolve('./bd'));
console.log('Contenido exportado:', db);

async function probarConexion() {
    try {
        const resultado = await db.query('SELECT * FROM empleados');

        console.log('Conexión exitosa');
        console.log(resultado);
    } catch (error) {
        console.log('Error al conectar:', error);
    }
}

probarConexion();