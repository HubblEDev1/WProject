import React from 'react'

export const CardCharacters = ({characters}) => {
    const [characters, SetCharacter] = useState([]);

    return (
        <div>
            <ul>
                {
                    characters.map((character) => (
                        <li>{character.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
