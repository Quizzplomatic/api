const createError = require("http-errors")
const jwt = require("jsonwebtoken")

module.exports.isNotAuthenticated = (req, res, next) => {
    const authorization = req.header('Authorization')
    console.log('is not authenticated')

    if (!authorization) {
        next()
    } else {
        next(createError(401))
    }
};

module.exports.isAuthenticated = (req, res, next) => {
    const authorization = req.header('Authorization')
    console.log('is authenticated')

    if (!authorization) {
        next(createError(401))
    } else {
        const [type, token] = authorization.split(' ')

        if (type !== 'Bearer') {
            next(createError(401))
        } else {
            jwt.verify(
                token, 
                process.env.JWT_SECRET || 'changeme', 
                (error, decodedToken) => {
                    if (error) {
                        next(error)
                    } else {
                        req.currentUser = decodedToken.id
                        next()
                    }
                }    
            )
        }
    }
};