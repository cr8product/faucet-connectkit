import { configureChains, createConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, goerli, sepolia } from 'wagmi/chains'
import { publicProvider } from '@wagmi/core/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, goerli, sepolia],
    [publicProvider()],
)

export const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
})