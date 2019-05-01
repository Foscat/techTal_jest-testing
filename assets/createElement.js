// const createElement = type => ({
//     nodeName: type,
//     nodeType: 1,
// });

const createElement = type =>({
    nodeName: type.toUpperCase(),
    nodeType: 1,
    attributes: [],
    childNodes: []
});

module.exports = createElement;