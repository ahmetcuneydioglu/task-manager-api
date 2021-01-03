const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to : email,
        from : 'canahmettt@gmail.com',
        subject : 'Hoşgeldin mesajı',
        text : `merhaba ${name} bu kısım direk apiden geldi`
    })
}


const sendCancelationEmail = (email, name) => {

    sgMail.send({
        to : email,
        from : 'canahmettt@gmail.com',
        subject : 'Güle güle mesajı',
        text : `merhaba ${name} gittiğin için çok üzgünüz`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// const msg = {
//     to : 'canahmettt@gmail.com',
//     from : 'canahmettt@gmail.com',
//     subject : 'This is my first creation',
//     text : 'i hope this one actually get to you'
// }

// sgMail.send(msg).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })