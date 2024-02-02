"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LoginPage() {
    return (
        <main className="flex flex-col items-center">
            <h1>Login</h1>
        </main>
    );
}

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = true;

        if (isLoggedIn) {
            router.push("/portfolio");
        }
    });

    return <></>;
}
