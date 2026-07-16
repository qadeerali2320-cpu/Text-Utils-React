import React from 'react'

function Alert(props) {
    if (!props.alert)
        return;
    const capitalize = (word) => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1)

    }
    return (
        <div style={{

            backgroundColor: props.alert.type,
            height: '50px'
        }}>
            {props.alert && (<div id={`alert alert-${props.alert.type} alert dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}

            </div>
            )}
        </div>
    )
}

export default Alert
