import React, { useState } from 'react'

export const Round16 = ({ teams }) => {
    const [playoffsTeams, setPlayoffsTeams] = useState(0)

    setPlayoffsTeams((all) => all + 1)

    console.log(teams)

    return (<div>Hola mundo</div>)
}
