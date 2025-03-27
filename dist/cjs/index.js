'use strict';

var React = require('react');

function CombineIcon(props) {
    const { title, classNameParent, classNameChild } = props;
    return (React.createElement("a", { style: {
            position: 'relative',
            width: '20px',
            cursor: 'pointer'
        }, title: title },
        React.createElement("i", { style: { fontSize: '18px' }, className: classNameParent, "aria-hidden": "true" }),
        React.createElement("i", { style: {
                fontSize: '10px',
                position: 'absolute',
                bottom: 0,
                right: '-4px',
                background: 'white',
                boxShadow: '0 0 0 2px white'
            }, className: classNameChild, "aria-hidden": "true" })));
}

module.exports = CombineIcon;
//# sourceMappingURL=index.js.map
