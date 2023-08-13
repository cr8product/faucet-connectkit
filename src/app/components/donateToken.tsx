import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import contractArtifact from '../../../artifacts/contracts/Faucet.sol/Faucet.json'
import { useContractRead } from 'wagmi'
import { parseEther } from 'viem'


//address: '0x6538B04BD0EBc08e9a40b3178ceb04b9a80AE491',
//abi: contractArtifact.abi,
//functionName: 'requestTokens',


export default function DonateToken() {
    const { address, isConnected } = useAccount()

    const { data, isLoading, isSuccess, write } = useContractWrite({
        //address: '0x8700f1aeaD6f9d10314993A10d6DD0047d4517d8',  // Goerli Testnet
        address: '0x6538B04BD0EBc08e9a40b3178ceb04b9a80AE491', // Mode Testnet address
        abi: contractArtifact.abi,
        functionName: 'donateTofaucet',
        //functionName: 'requestTokens',
        //args: [address]
    })




    return (
        <div>
            <button className='btn btn-primary' onClick={() => write({
            })}>Donate</button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </div >
    )
}