import ethers from 'ethers'
import contractArtifact from '../../artifacts/contracts/Faucet.sol/Faucet.json'

export default function submitTx() {

    const deployedContract = "0x8700f1aead6f9d10314993a10d6dd0047d4517d8";
    const privateKey = `0x` + process.env.DEPLOYER!
    const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_KEY}`)

    console.log(typeof (process.env.DEPLOYER), process.env.DEPLOYER)
    const signer = new ethers.Wallet(privateKey, provider)
    //const readContract = new ethers.Contract(deployedContract, contractArtifact.abi, provider);
    const writeContract = new ethers.Contract(deployedContract, contractArtifact.abi, signer);

    async function submitTx() {
        const tx = await writeContract.requestTokens(0.2, walletAddress);
        alert(`Transaction submitted: ", ${tx.hash}`);
    }
}