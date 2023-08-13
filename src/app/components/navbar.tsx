import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link className="btn btn-ghost normal-case text-xl" href="/">Mode Testnet Faucet</Link>
            </div>
            <div className="navbar-center">
                <Link href="/">Faucet |</Link>
                <Link href="/donate">|  Donate</Link>
            </div>
            <div className="navbar-end">
                Built by the <Link href="https://www.cr8product.com/"> Cr8Product</Link> Team
            </div>
        </div>
    )
}
