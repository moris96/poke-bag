# Pokemon Bag React App 

## A CRUD web app that shows the entire Pokedex across all 9 generations, a trivia game to test your knowledge, and the opportunity to build your own trainer's bag using a cloud-deployed database via MongoDB. 

---

## Getting Started: 
add heroku link here . You might have to wait a minute or two for Heroku to warmup depending on your internet speed... 

---

## Technologies Used: 
* HTML
* CSS
* JavaScript
* Node.js
* React
* Mongoose
* MongoDB
* Express
* Google Fonts 

--- 

## ERD (entity relationship diagram): ![](/public/erd.png)

--- 

## Trello Workboard Link: [trello board](https://trello.com/b/Uo7tf5Ii/unit3project)

--- 

## Project Screenshots: 

### Pokedex Page:
![](/public/pokedex.png)

### Trivia Game Page: 
![](/public/game.png)

## Trainer Bag Page: 
![](/public/bag.png)

--- 

# Code Discussion: 

### This web app is a SPA (single page application) using React for front-end development and Express / Node.js for backend development including servers and database via MongoDB. The bulk of the project is inside the src folder that contains:
* ### Components: Login / Singup forms, navigation bar 
* ### Pages: App (main page for SPA), authorization page, trainer bag page, trivia game page, Pokedex page 
* ### Utilities: send-requests, users-api, users-service for full CRUD api

--- 

## Pokedex Page:

### The Pokedex Page is divided into 3 files: PokeDexPage (main viewfile), Card (to display the images also known as sprites), PokeInfo (to display the stats for the individual Pokemon when clicked)

## PokeDexPage: 
```JavaScript
export default function PokedexPage(){
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [next, setNext] = useState()
    const [prev, setPrev] = useState()
    const [pokeDex, setPokeDex] = useState()

    const pokeMon = async() => {
        setLoading(true)
        const res = await axios.get(url)
        setNext(res.data.next)
        setPrev(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async(res) => {
        res.map(async(i) => {
            const result = await axios.get(i.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a,b) => a.id>b.id ? 1 : -1)
                return state 
            })
        })
    }

    useEffect(() => {
        pokeMon()
    }, [url])
```
### As you can see useState and useEffect hooks are used. For the useState, I used Axios to make it easy to call the Poke API in order to fetch all the information for every Pokemon, which is a lot lol. Over 1,000 in fact. I then used the useEffect method to display the effect being shown which sorts the individual Pokemon called from the API when fetching it. 
---
## Card Page: 
```JavaScript
export default function Card({ pokemon, loading, infoPoke }){
    return(
        <>
        {
            loading ? <h1>Loading...</h1> : 
                pokemon.map((i) => {
                    return(
                        <>
                            <div className="card" key={i.id} onClick={()=>infoPoke(i)}>
                                <h2>{i.id}</h2>
                                <img src="i.sprites.front_default" alt="" />
                                <h2>{i.name}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
};
```
### What this code does is display the images of each Pokemon when clicked, as well as display all the abilities and statistics. 
---
## PokeInfo Page: 
```JavaScript
export default function PokeInfo({ data }){
    return(
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }

        </>
    )
};
```
### What this bit of code does is call all the abilities and stats for each Pokemon called when fetching the API. Basically all the information inside of the API which is originally in JSON format parsed from the website. The Card page then displays the images and text, which is then showed in the main PokeDexPage. 
---

## Restful Routes (api) for Pokemon trainer bags: 

Action | URL | HTTP Verb 
--- | --- | --- 
Index | /api/bags | GET
Delete (destroy) | /api/bags/:id | DELETE
Update | /api/bags/:id | PUT
Create | /api/bags | POST 


--- 

## Key Learnings / Takeaways: 
* Learned how to make effective SPAs (single page applications)
* Learned how React makes everything easier in full-stack web development 
* Improved front-end development skills including styling with CSS 

--- 

## Challenges: 
* CSS! My styling is not the best I'll admit lol, but I did learn a lot about positioning elements, flexbox, and positioning HTML elements to make the DOM look nicer. 
* I am primarily a backend-developer and I love working with functionality and algorithms (I'm a mathematician who loves computer science, theoritical physics, and statistics), so this project really tested my front-end skills to improve myself as a full-stack web developer. React is a really awesome tool and makes web development fun! 