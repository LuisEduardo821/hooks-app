import { memo } from "react";
import PropTypes from "prop-types";

export const Small = memo(({ value }) => {
    console.log('me volvi a redibujar :(')
    return (
        <small>{value}</small>
    )
})

Small.displayName = 'Small';

Small.propTypes = {
    value: PropTypes.number,
}