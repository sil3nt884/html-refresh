const saveHelper = require('../helpers/save')

module.exports  = (request, response) => {
    saveHelper(request.body)
        .catch((e)=> response.send(e).status(500))
    response.send('ok').status(200)

}
