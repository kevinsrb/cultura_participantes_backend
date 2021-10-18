import app from './app.js';

async function main() {
    await app.listen(process.env.SERVER_PORT_PARTI);
    console.log(`sever running in ${process.env.SERVER_PORT_PARTI}`)
}

main();