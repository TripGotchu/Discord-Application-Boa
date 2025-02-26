
const { Client, Intents, Message } = require('discord.js')
const client = new Client({
     intents: 32767,
    disableEveryone: true
});
const keepAlive = require('./server.js');
keepAlive();
const config = require('./config.json')
const Discord = require('discord.js')

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`)

})

client.on('message', async message => {

    let args = message.content.slice(config.prefix.length).trim().split(/ +/)
    let command = args.shift().toLowerCase()


let questions = {
    firstQuestion: "Tell us a bit about yourself",
    secondQuestion: "Are you willing to be a moderator?",
    thirdQuestion: "What do you think you can bring to the table as a moderator?",
    fourthQuestion: "What do you think of the rules?",
    fifthQuestion: "Time Zone and Active Times",
    sixithQuestion: "Do you have any previous experience managing a discord server?",
    seventhQuestion: "How Active Can You Be?",
    eighthQuestion: "Will you help the server grow? (Boosting, Inviting, Advertising, Ect.)"
}


if (!message.content.startsWith(config.prefix) || message.author.bot) return
if (command === "apply") {
    message.channel.send("I have started this process in your DM's. Type `cancel` to cancel")
    message.author.send(questions.firstQuestion).then(msg => {
        const filter1 = m => m.author.id === message.author.id
        msg.channel.awaitMessages(filter1, {
            time: 5 * 60000,
            max: 1
        }).then(messages => {
            let msg1 = messages.first().content
            if(msg1.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
            message.author.send(questions.secondQuestion).then(msg => {
                const filter1 = m => m.author.id === message.author.id
                msg.channel.awaitMessages(filter1, {
                    time: 5 * 60000,
                    max: 1
                }).then(messages => {
                    let msg2 = messages.first().content
                    if(msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                    message.author.send(questions.thirdQuestion).then(msg => {
                        const filter1 = m => m.author.id === message.author.id
                        msg.channel.awaitMessages(filter1, {
                            time: 5 * 60000,
                            max: 1
                        }).then(messages => {
                            let msg3 = messages.first().content
                            if(msg3.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                            message.author.send(questions.fourthQuestion).then(msg => {
                                const filter1 = m => m.author.id === message.author.id
                                msg.channel.awaitMessages(filter1, {
                                    time: 5 * 60000,
                                    max: 1
                                }).then(messages => {let msg4 = messages.first().content
                                if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                message.author.send(questions.secondQuestion).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(messages => {
                                    let msg5 = messages.first().content
                                    if(msg5.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                    message.author.send(questions.fifthQuestion).then(msg => {
                                        const filter1 = m => m.author.id === message.author.id
                                        msg.channel.awaitMessages(filter1, {
                                            time: 5 * 60000,
                                            max: 1
                                        }).then(messages => {
                                            let msg6 = messages.first().content
                                            if(msg6.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                            message.author.send(questions.sixithQuestion).then(msg => {
                                                const filter1 = m => m.author.id === message.author.id
                                                msg.channel.awaitMessages(filter1, {
                                                    time: 5 * 60000,
                                                    max: 1
                                                }).then(messages => {
                                                    let msg7 = messages.first().content
                                                    if(msg7.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                                    message.author.send(questions.seventhQuestion).then(msg => {
                                                        const filter1 = m => m.author.id === message.author.id
                                                        msg.channel.awaitMessages(filter1, {
                                                            time: 5 * 60000,
                                                            max: 1
                                                        }).then(messages => {
                                                            let msg8 = messages.first().content
                                                            if(msg8.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                                            message.author.send(questions.eighthQuestion).then(msg => {
                                                                const filter1 = m => m.author.id === message.author.id
                                                                msg.channel.awaitMessages(filter1, {
                                                                    time: 5 * 60000,
                                                                    max: 1
                                                                })
                                                                message.author.send("Subbmitted application!").then(msg => {
                                                message.client.channels.cache.get(config.applicationChannel).send(
                                                    new Discord.MessageEmbed()
                                                        .setTitle('Application Submitted')
                                                        .setDescription(`This application was submitted by ${message.author.tag} (${message.author.id}).\nCreated: ${message.author.createdAt}`)
                                                        .addField(questions.firstQuestion, "Answer: " + msg1)
                                                        .addField(questions.secondQuestion, "Answer: " + msg2)
                                                        .addField(questions.thirdQuestion, "Answer: " + msg3)
                                                        .addField(questions.fourthQuestion, "Answer: " + msg4)
                                                        .addField(questions.fifthQuestion, "Answer: " + msg5)
                                                        .addField(questions.sixithQuestion, "Answer: " + msg6)
                                                        .addField(questions.seventhQuestion, "Answer: " + msg7)
                                                        .addField(questions.eighthQuestion, "Answer: " + msg8)
                                                        )
                                                    })
                                                })
                                            })
                                        })

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        })
    })
    })
    })
    })
})
}

    if(command === "decline"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you dont' have permission to use this command")
        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to decline")
        User.send("Your application to " + message.guild.name + " got declined by: " + message.author.tag)
    }

    if(command === "accept"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you dont' have permission to use this command")
        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to accept")
        User.send(":tada: Your application to " + message.guild.name + " got accepted by: " + message.author.tag)
    }
})

client.login(process.env.TOKEN)
