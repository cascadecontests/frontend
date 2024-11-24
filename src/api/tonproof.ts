import { Account, ConnectAdditionalRequest, TonProofItemReplySuccess } from '@tonconnect/ui-react';
import axiosInstance from './core/axiosInstance';

export const generatePayload = async (): Promise<ConnectAdditionalRequest | null> => {
    try {
        const { data } = await axiosInstance.post("/tonproof/payload");
        return { tonProof: data.payload };
    } catch (error) {
        return null;
    }
}

export const check = async (proof: TonProofItemReplySuccess['proof'], account: Account): Promise<string | null> => {
    const body = {
        address: account.address,
        network: account.chain,
        proof: {
            ...proof,
            state_init: account.walletStateInit,
        }
    }

    try {
        const { data } = await axiosInstance.post('/tonproof/check', body);
        alert(data.token);
        return data.token;
    } catch (error) {
        return null;
    }

}
