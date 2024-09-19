import react from 'react'

const pokeCard = ({speciesData, data:{id, types, height, weight}})=>{

      const typesArray = [
        {
            "name": "normal",
            "url": "/api/v2/type/1/"
        },
        {
            "name": "fighting",
            "url": "/api/v2/type/2/"
        },
        {
            "name": "flying",
            "url": "/api/v2/type/3/"
        },
        {
            "name": "poison",
            "url": "/api/v2/type/4/"
        },
        {
            "name": "ground",
            "url": "/api/v2/type/5/"
        },
        {
            "name": "rock",
            "url": "/api/v2/type/6/"
        },
        {
            "name": "bug",
            "url": "/api/v2/type/7/"
        },
        {
            "name": "ghost",
            "url": "/api/v2/type/8/"
        },
        {
            "name": "steel",
            "url": "/api/v2/type/9/"
        },
        {
            "name": "fire",
            "url": "/api/v2/type/10/"
        },
        {
            "name": "water",
            "url": "/api/v2/type/11/"
        },
        {
            "name": "grass",
            "url": "/api/v2/type/12/"
        },
        {
            "name": "electric",
            "url": "/api/v2/type/13/"
        },
        {
            "name": "psychic",
            "url": "/api/v2/type/14/"
        },
        {
            "name": "ice",
            "url": "/api/v2/type/15/"
        },
        {
            "name": "dragon",
            "url": "/api/v2/type/16/"
        },
        {
            "name": "dark",
            "url": "/api/v2/type/17/"
        },
        {
            "name": "fairy",
            "url": "/api/v2/type/18/"
        },
        {
            "name": "stellar",
            "url": "/api/v2/type/19/"
        },
        {
            "name": "unknown",
            "url": "/api/v2/type/10001/"
        },
        {
            "name": "shadow",
            "url": "/api/v2/type/10002/"
        }
    ]

      return <article key={id} className="pokemon-card"> {/* Unique key and card class */}
          <h2 className="title">{speciesData[id - 1]?.names[7].name}</h2>
          <img
            className="pokemon"
            id={id} // Set unique ID for potential usage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`}
            alt={`Sprite of ${speciesData[id - 1]?.names[7].name}`} // Add alt text for accessibility
          />
          <div className="info">
            <span className="types">
              {types.map((type) => (
                <img
                  key={type.type.name} // Ensure unique key based on type name
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${type.type.url.split('/')[4]}.png`}
                  alt={`${type.type.name} type`} // Add alt text for accessibility
                />
              ))}
            </span>
            <span>Height: {height}</span>
            <span>Weight: {weight}</span>
            <p>
              {speciesData[id - 1]?.flavor_text_entries[26]?.flavor_text}
            </p>
          </div>
        </article>
}

export default pokeCard