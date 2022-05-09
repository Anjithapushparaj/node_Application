import * as express from 'express';
import * as mongoose from 'mongoose';
import routes from './routes';



const app = express();
const port = 5200;
const bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const dbUrl = 'mongodb://localhost:27017/foodcart';
const dbOptions: mongoose.ConnectionOptions = Object.assign({ useNewUrlParser: true });

const connectDb = ():Promise<typeof mongoose> => {
    return mongoose.connect(dbUrl, dbOptions).then((mongoDB: typeof mongoose) => {
        console.info(`Successfully connected to mongodb.`);
        return mongoDB;
    }).catch((err: any) => {
        console.error(`Unable to connect to mongodb.`);
        throw err;
    });
}

connectDb();



