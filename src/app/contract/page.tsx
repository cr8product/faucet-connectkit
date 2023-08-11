'use client'

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { config } from "./config"
import { useContractRead } from 'wagmi'

const wagmigotchiContract = {
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "caretaker", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "CaretakerLoved", "type": "event" }, { "inputs": [], "name": "clean", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "feed", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAlive", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBoredom", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getHunger", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSleepiness", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStatus", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getUncleanliness", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "love", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "play", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sleep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
    ,
}

export function Profile() {
    const { data: hunger, isError, isLoading } = useContractRead({
        address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        abi: wagmigotchiContract.abi,
        functionName: 'getHunger',
    })
    return (<div>data: {hunger} </div>)
}



// Pass config to React Context Provider
export default function App() {
    return (
        <WagmiConfig config={config}>
            <Profile />
        </WagmiConfig>
    )
}