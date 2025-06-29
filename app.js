const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const canalesRouter = require('./routes/canales');
const proxyRoutes = require('./routes/proxy');
app.use('/proxy', proxyRoutes);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/', canalesRouter);

app.listen(port, () => {
  console.log(`Servidor IPTV funcionando en http://localhost:${port}`);
});
