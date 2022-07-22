const app = require("./app");

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});