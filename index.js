const express = require("express");

const server = require("./api/server");

const port = process.env.PORS || 5000;
server.listen(port, () => console.log(`\n* Running on ${port} *\n`));
