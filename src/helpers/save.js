const fsPromise = require('fs').promises


module.exports = async (body) => {
   return  await fsPromise.writeFile(`save/${new Date()
       .toISOString()
       .substring(0, 13)
       .replace(/-/g, '')}.txt`, JSON.stringify(body))

}
