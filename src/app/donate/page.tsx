'use client'
import { WagmiConfig } from "wagmi"
import { config } from "../config/conf"
import Profile from "./profile"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import RequestTokens from "../components/requestToken"


export default function App() {
    return (
        <WagmiConfig config={config}>
            <Hero />
        </WagmiConfig>
    )
}