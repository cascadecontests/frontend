'use client';

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React from "react";

const manifestUrl = "https://raw.githubusercontent.com/cascadecontests/frontend/refs/heads/master/public/tonconnect-manifest.json";

const TonConnectProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <TonConnectUIProvider
            manifestUrl={manifestUrl}
            actionsConfiguration={{
                modals: 'all',
                notifications: 'all',
            }}
        >
            {children}
        </TonConnectUIProvider>
    );
}

export { TonConnectProvider };