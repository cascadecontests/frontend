'use client';

import * as api from "@/api";
import { useIsConnectionRestored, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { useContext, useEffect, useRef } from "react";
import { TonProofContext } from "./TonProofContext";

const PAYLOAD_TTL_MS = 1000 * 60 * 20;
// const PAYLOAD_TTL_MS = 1000 * 2;

export const useTonProof = () => {
    const { setToken } = useContext(TonProofContext);
    const [tonConnectUI] = useTonConnectUI();
    const isConnectionRestored = useIsConnectionRestored();
    const wallet = useTonWallet();
    const interval = useRef<ReturnType<typeof setInterval> | undefined>();

    useEffect(() => {
        if (!isConnectionRestored) return;

        clearInterval(interval.current);

        if (!wallet) {
            localStorage.removeItem('access-token');
            setToken(null);

            const refreshPayload = async () => {
                tonConnectUI.setConnectRequestParameters({ state: 'loading' });

                const value = await api.tonproof.generatePayload();
                if (!value) {
                    tonConnectUI.setConnectRequestParameters(null);
                } else {
                    tonConnectUI.setConnectRequestParameters({ state: 'ready', value })
                }
            }

            refreshPayload();
            setInterval(refreshPayload, PAYLOAD_TTL_MS);
            return;
        }

        const token = localStorage.getItem('access-token');
        if (token) {
            setToken(token);
            return;
        }

        // ton proof does not exists
        if (wallet.connectItems?.tonProof && !('error' in wallet.connectItems.tonProof)) {
            api.tonproof.check(wallet.connectItems.tonProof.proof, wallet.account).then(result => {
                if (result) {
                    setToken(result);
                    localStorage.setItem('access-token', result);
                } else {
                    alert('dickies');
                    tonConnectUI.disconnect();
                }
            });
        } else {
            alert('dickies 2');
            tonConnectUI.disconnect();
        }
    }, [wallet, isConnectionRestored, setToken]);
}