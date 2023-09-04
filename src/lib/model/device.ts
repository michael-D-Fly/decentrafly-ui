export type Device = {
    name: string;
    claimed: boolean;
    user: string;
    type: 'mqtt' | 'secure_adsb';
    messages_sent: number;
}