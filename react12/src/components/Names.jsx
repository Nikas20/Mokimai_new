import NameAdd from "./NameAdd"
import {getAllData} from "../services/get";
import { useEffect, useState } from "react";
import Name from "./Name";
function Names() {

    const [players, setPlayers] = useState([]);
    const [error, setError] = useState("");

    const fetcData = async () => {
        try {
            const data = await getAllData();
            setPlayers(data);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetcData();
    }, []);
    return (
        <>
        <main>
            {error && <p>{error}</p>}
            <h1>Who pays the bill</h1>
            <NameAdd/>
            <div className="border border-2 border-amber-400">

                {players.map((player) => (
            <Name player={player} key={player.id}/>
            ))}

            </div>
        </main>
        </>
    )
} export default Names