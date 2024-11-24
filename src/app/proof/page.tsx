'use client';

import { TonProofContext } from "../TonProofContext";
import { useState } from "react";
import { AccountInfoButton } from "@/components/AccountInfoButton";

export default function Proof() {
    // const { setToken } = useContext(TonProofContext);
    // const isConnectionRestored = useIsConnectionRestored();
    // const wallet = useTonWallet();
    // const interval = useRef<ReturnType<typeof setInterval> | undefined>();
    const [token, setToken] = useState<string | null>(null);

    return (
        <TonProofContext.Provider value={{ token, setToken }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <AccountInfoButton />
            </div>
        </TonProofContext.Provider>
    );
}