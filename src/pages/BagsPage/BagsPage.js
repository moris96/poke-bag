import { useState, useEffect } from "react";

export default function BagsPage (props){
    const [bags, setBags] = useState([])
    const [foundBag, setFoundBag] = useState(null)
    const [newBag, setNewBag] = useState({
        items: '',
        pokeBalls: '',
        keyItems: '',
        hasAllBadges: ''
    })
    // index
    const getBags = async () => {
        try {
            const response = await fetch('/api/bags')
            const data = await response.json()
            setBags(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteBag = async (id) => {
        try {
            const response = await fetch(`/api/bags/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundBag(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateBag = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/bags/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundBag(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
    const createBag = async () => {
        try {
            const response = await fetch(`/api/bags`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newBag})
            })
            const data = await response.json()
            setFoundBag(data)
            setNewBag({
                items: '',
                pokeBalls: '',
                keyItems: '',
                hasAllBadges: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (evt) => {
        setNewBag({...newBag, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getBags()
    }, [foundBag])

    return (
        <>
            {
                bags && bags.length ? (<ul>
                    {
                        bags.map((bag) => {
                            return (
                                <li key={bag._id}>
                                    Items: {bag.items}. Poke Balls: {bag.pokeBalls}. Key Items: {bag.keyItems}. Has all 8 gym badges: {bag.hasAllBadges? 'has all 8 gym badges' : 'does not have 8 gym badges'}
                                    <br/><button onClick={() => deleteBag(bag._id)}>Delete This Bag</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Bags Yet Add One Below</h1>
            }
            {'Items '}<input value={newBag.items} onChange={handleChange} name="items"></input><br/>
            {'Poke Balls '}<input value={newBag.pokeBalls} onChange={handleChange} name="pokeBalls"></input><br/>
            {'Key Items '}<input value={newBag.keyItems} onChange={handleChange} name="keyItems"></input><br/>
            {'Has all 8 gym badges '}<input type="checkbox" checked={newBag.hasAllBadges} onChange={(evt) => setNewBag({...newBag, hasAllBadges: evt.target.checked })}></input><br/>
            <button onClick={() => createBag() }>Create A New Bag</button>
            {
                foundBag? <div>
                    <h2>{foundBag.items}</h2>
                    <h2>{foundBag.pokeBalls}</h2>
                    <h2>{foundBag.keyItems}</h2>
                    <h3>{foundBag.hasAllBadges? 'Has all 8 gym badges': 'Does not have all 8 gym badges'}</h3>
                </div>: <>No Bag in Found Bag State</>
            }
        </>
    );
};