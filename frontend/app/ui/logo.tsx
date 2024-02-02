import Link from "next/link";

export default function Logo() {
    return (
        <Link key="logo" href="/">
            <div
                style={{
                    width: "100%",
                    height: "240px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: "url(/logo.webp)",
                    borderRadius: "5px",
                }}
            ></div>
        </Link>
    );
}

{
}
