import { configureChains, createConfig, mainnet, sepolia, WagmiConfig } from 'wagmi'
import { goerli } from 'viem/chains'
import { publicProvider } from 'wagmi/providers/public'
import { modeTestnet } from './modetestnet'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { getDefaultConfig } from 'connectkit'


const alchemyId = process.env.ALCHEMY_ID;
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

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

export const config = createConfig(
    getDefaultConfig({
        appName: "Faucet App",
        alchemyId,
        walletConnectProjectId,
        autoConnect: true,
        //connectors: [new InjectedConnector({ chains })],
        //publicClient,
        //webSocketPublicClient,
    }))

