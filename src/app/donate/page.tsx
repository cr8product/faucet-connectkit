'use client'
import { WagmiConfig } from "wagmi"
import { config } from "../config/conf"
import Profile from "./donate"
import Navbar from "../components/navbar"
import HeroDonate from "../components/heroDonate"
import RequestTokens from "../components/requestToken"


export default function App() {
    return (
        <WagmiConfig config={config}>
            <HeroDonate />
        </WagmiConfig>
    )
}