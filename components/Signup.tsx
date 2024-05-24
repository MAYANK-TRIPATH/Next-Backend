"use client"
import { useState } from "react"
import axios from "axios";

export function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="p-4 border rounded pb-4">
                <input onChange={(e) => {
                    setUsername(e.target.value)
                }} className="p-2 m-2" type="text" placeholder="username"></input>
                <br/>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} className="p-2 m-2" type="password" placeholder="password"></input>
                <br/>
                <div className="mt-4 flex justify-center">
                    <button onClick={() => {
                        axios.post("http://localhost:3000/api/user",
                        {
                            username,
                            password
                        })
                    }}>Signup</button>

                </div>
            </div>

        </div>

    </div>

}