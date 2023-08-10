import Image from 'next/image'

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <h6 className='text-2xl font-bold'>This is <kbd className="kbd kbd-lg">Mode Sepolia</kbd> Faucet</h6>
          <br />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your address?</span>
            </label>
            <input type="text" placeholder="Enter your wallet address (ex. 0x)" className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <p className="py-6">By clicking the button below after you enter your wallet address <div className="badge badge-accent">0.1 ETH</div> allocated to your account and a transaction is initiated.</p>
          <button className="btn btn-primary">Request Test Token</button>
        </div>
      </div>
    </div>
  )
}
