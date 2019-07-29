import React from 'react'

export default function GameStreams({match, location}) {
    return (
        <div>
            <li>{match.params.id}</li>
            <li>{location.state.gameID}</li>
        </div>
    )
}
