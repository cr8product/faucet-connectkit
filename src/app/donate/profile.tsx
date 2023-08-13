'use client'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import RequestTokens from '../components/requestToken'

export default function Profile() {
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
                <RequestTokens />
            </div>

        )
    }
    return <button className='btn btn-warning' onClick={() => connect()}>Connect Wallet</button>
}