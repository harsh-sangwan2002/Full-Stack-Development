import React, { useEffect, useState } from 'react'
import { database } from '../firebase'

function Firestore() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const createUser = async () => {

        // const res = await database.users.doc('11111').set({ name, age });
        const res = await database.users.add({ name, age });
        console.log("User created with ID: ", res.id);

        setName("");
        setAge("");
    }

    const updateUser = async () => {

        let uid = "U5GU5NGWqzkwBPBanVYA";
        const res = await database.users.doc(uid).update({ name, age });
        console.log(res);
    }

    const deleteUser = async () => {

        let uid = "U5GU5NGWqzkwBPBanVYA";
        const res = await database.users.doc(uid).delete();
        console.log(res);
    }

    useEffect(() => {
        (async function () {
            let uid = "U5GU5NGWqzkwBPBanVYA";
            // let data = await database.users.doc(uid).get();
            let data = await database.users.get();
            data.forEach(obj => console.log(obj.data()));
        })()
    })


    return (
        <div>
            <label htmlFor="name"></label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="age"></label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />

            <button onClick={createUser}>Create User</button>
            <button onClick={updateUser}>Update User</button>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default Firestore
