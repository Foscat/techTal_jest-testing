module.exports.createItem = text => ({
        completed: false,
        text,
    })

module.exports.replaceText = (item, text) => ({
    ...item
})

module.exports.toggleItem = item => ({
    ...item
})