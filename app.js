import http from 'http';
import express from 'express'; 
import logger from 'morgan'; 
import dotenv from 'dotenv'
import bodyParser from 'body-parser'; 
import router from './server/routes/index';
import YAML from 'yamljs';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
const hostname = '127.0.0.1'; 
const port = 3000;

const app = express() // setup express application;
app.use(cors());

const server = http.createServer(app); 


dotenv.config();
app.use(logger('dev')); // log requests to the console // Parse incoming requests data 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(router);

app.get('*', (req, res) => res.status(200)
	.send({ message: 'Welcome to the default API route', })); 

const documentation = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));
documentation.servers[0].url = process.env.SERVER_URL;

// setup swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));


server.listen(port, hostname, () => { 
	console.log(`Server running at http://${hostname}:${port}/`);
	 });

export default app;