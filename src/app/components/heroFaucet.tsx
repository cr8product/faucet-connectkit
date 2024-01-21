import RequestTokens from "./requestToken";


export default function HeroFaucet() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <h6 className='text-2xl font-bold'>This is <kbd className="kbd kbd-lg">Mode Sepolia</kbd> Faucet</h6>
                    <p className="py-6">Enter your wallet address and get your daily <div className="badge badge-accent">0.2 Test ETH</div></p>
                    <RequestTokens />
                </div>
            </div>
        </div>
    )
}