import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import contractArtifact from '../../../artifacts/contracts/Faucet.sol/Faucet.json'
import { useContractRead, useEnsName, useConnect, useDisconnect } from 'wagmi'
import { parseEther } from 'viem'
import { InjectedConnector } from 'wagmi/connectors/injected'


//address: '0x6538B04BD0EBc08e9a40b3178ceb04b9a80AE491',
//abi: contractArtifact.abi,
//functionName: 'requestTokens',


export default function RequestTokens() {
    const { address, isConnected } = useAccount()
    const userAddress = address;
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()


    const { data, isLoading, isSuccess, write } = useContractWrite({
        //address: '0x8700f1aeaD6f9d10314993A10d6DD0047d4517d8', // Goerli Contract
        address: '0x8700f1aeaD6f9d10314993A10d6DD0047d4517d8', // Mode Testnet Contract
        abi: contractArtifact.abi,
        //functionName: 'donateTofaucet',
        functionName: 'requestTokens',
        args: [userAddress,]

    })

    const requestCoins = () => {

        write()
    }


    if (isConnected) {
        return (
            <div>
                <button className='btn btn-secondary' onClick={() => disconnect()}>Disconnect</button>
                - Connected to {address}
                <div>
                    <button className='btn btn-primary' onClick={requestCoins}>Request Token</button>
                    {isLoading && <div>Check Wallet</div>}
                    {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
                </div >
            </div>

        )
    }
    return <button className='btn btn-warning' onClick={() => connect()}>Connect Wallet</button>
}