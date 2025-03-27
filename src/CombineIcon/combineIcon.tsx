import React from "react";

function CombineIcon(props: any) {
    const {
        title,
        classNameParent,
        classNameChild
    } = props
    return (
        <a 
            style={{ 
                position: 'relative', 
                width: '20px', 
                cursor: 'pointer' 
                }} 
                title={title} 
        >
            <i 
                style={{ fontSize: '18px' }} 
                className={classNameParent} 
                aria-hidden="true" 
            />
            <i
                style={{
                    fontSize: '10px',
                    position: 'absolute',
                    bottom: 0,
                    right: '-4px',
                    background: 'white',
                    boxShadow: '0 0 0 2px white'
                }}
                className={classNameChild}
                aria-hidden="true"
            />
        </a>
    );
};
export default CombineIcon;