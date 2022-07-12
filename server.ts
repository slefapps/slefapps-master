//server.js
import app from './src/app';
const PORT = process.env.PORT || 3000;
// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});