const express = require('express');
const bodyParser = require('body-parser');

const Concesionarioroutes = require('./Routes/Concesionario');
const Vehiculoroutes = require('./Routes/Vehiculo');
const Localroutes = require('./Routes/Local');
const Clienteroutes = require('./Routes/Cliente'); 
const Insumoroutes = require('./Routes/Insumo');
const Empleadoroutes = require ('./Routes/Empleado')
const DetalleCompraroutes = require ('./Routes/DetalleCompra')
const Compraroutes = require ('./Routes/Compra')


const app = express();

app.use(bodyParser.json());

app.use('/api/concesionarios', Concesionarioroutes);
app.use('/api/vehiculos', Vehiculoroutes);
app.use('/api/locales', Localroutes);
app.use('/api/clientes', Clienteroutes);
app.use('/api/insumos', Insumoroutes);
app.use('/api/empleados', Empleadoroutes);
app.use('/api/detalleCompra', DetalleCompraroutes);
app.use('/api/compras', Compraroutes)

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
