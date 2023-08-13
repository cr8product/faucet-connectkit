'use client'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import DonateToken from '../components/donateToken'

export default function Donate() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()


    if (isConnected) {
        return (
            <div>
                <button className='btn btn-secondary' onClick={() => disconnect()}>Disconnect</button>
                - Connected to {ensName ?? address}
                <DonateToken />
            </div>

        )
    }
    return <button className='btn btn-warning' onClick={() => connect()}>Connect Wallet</button>
}