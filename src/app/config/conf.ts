import { configureChains, createConfig, mainnet, sepolia } from 'wagmi'
import { goerli } from 'viem/chains'
import { publicProvider } from 'wagmi/providers/public'
import { modeTestnet } from './modetestnet'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'


const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, goerli, sepolia, modeTestnet],
    [
        //alchemyProvider({ apiKey: process.env.ALCHEMY_GOERLI_API_KEY! }),
        //infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_KEY! }),
        jsonRpcProvider({
            rpc: (chain) => ({
                http: `https://sepolia.mode.network/`,
            }),
        }),
        publicProvider()],
)

export const config = createConfig({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    publicClient,
    webSocketPublicClient,
})