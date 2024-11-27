import { useIsConnectionRestored, useTonConnectUI, useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { LoaderCircle, WalletMinimal } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const TonConnectButton = () => {
    const isConnectionRestored = useIsConnectionRestored();
    const [tonConnectUI] = useTonConnectUI();
    const address = useTonAddress();
    const wallet = useTonWallet();

    const enshortAdress = (address: string): string => {
        if (address.length < 8) return address;
        return `${address.slice(0, 4)}...${address.slice(-4)}`;
    }

    if (!isConnectionRestored) {
        return (
            <Button disabled>
                <LoaderCircle className="animate-spin" /> Connect Wallet
            </Button>
        );
    }

    if (!tonConnectUI.account) {
        return (
            <Button onClick={() => tonConnectUI.openModal()}>
                <WalletMinimal /> <div>Connect Wallet</div>
            </Button>
        );
    }

    if (!wallet) {
        tonConnectUI.disconnect();
        return (
            <Button onClick={() => tonConnectUI.openModal()}>
                <WalletMinimal /> <div>Connect Wallet</div>
            </Button>
        );
    }


    return (
        <Button onClick={() => tonConnectUI.disconnect()}>
            <WalletMinimal /> {enshortAdress(address)}
        </Button>
    );
}

export { TonConnectButton };