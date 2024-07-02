import express from 'express';


const PORT = process.env.APP_PORT || 3001;

const main = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log('Server up');
    });
};

main();
