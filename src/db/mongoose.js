const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGODB_URL, {

    useNewUrlParser : true,
    useCreateIndex : true

})



// const me = new User({
//     name : '  Andrew',
//     email : 'AHMET@GMAİL.COM   ',
//     password : '    re32 '
//     //age : -3

// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })