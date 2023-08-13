"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { WagmiConfig } from "wagmi"
import { config } from "./config/conf"
import Hero from './components/hero';

export default function Home() {
  const [walletAddress, setWalletAddress] = React.useState("Enter your wallet address (ex. 0x)");

  async function onClickHandler() {
    const response = await axios.post("/api/donate", { userWallet: walletAddress });
    alert(response)
    return response
  }


  return (
    <WagmiConfig config={config}>
      <Hero />
    </WagmiConfig>
  )
}