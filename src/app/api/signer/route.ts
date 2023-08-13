import { ethers } from 'ethers'
import { NextResponse, NextRequest } from "next/server";
import contractArtifact from '../../../../artifacts/contracts/Faucet.sol/Faucet.json'


const deployedContract = "0x82d5b05C3aDc774Cb3266eCaD8A6A60e62eF6842";
const privateKey = `0x` + process.env.DEPLOYER
//const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_KEY}`)
const provider = new ethers.JsonRpcProvider(`https://sepolia.mode.network/`)

const readContract = new ethers.Contract(deployedContract, contractArtifact.abi, provider);
const signer = new ethers.Wallet(privateKey, provider);
const writeContract = new ethers.Contract(deployedContract, contractArtifact.abi, signer);

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log(reqBody.userWallet)
        const tx = await writeContract.requestTokens(reqBody.userWallet);
        return NextResponse.json({ message: tx.hash }, { status: 200 })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({ message: "Successfully working", success: true }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}


