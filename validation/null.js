const { Validation } = require('../src/index.js');

module.exports = new Validation()
.setCommnads(["all"])
.setExecution( (message, next) => {
   if (message.content.includes("null")) return next()
   else message.reply({content: "bruuh"});
})