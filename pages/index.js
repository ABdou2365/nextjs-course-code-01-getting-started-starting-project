import Link from "next/link";

function HomePage() {
    return (
        <div>
            <h1>The home page !!</h1>
            <ul>
                <li>
                    <Link href="/portfolio" >Portfolio</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;