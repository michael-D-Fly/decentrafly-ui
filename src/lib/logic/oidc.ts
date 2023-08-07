export interface TokenMap {
    id_token: string
}

export function uri_to_token_map(uri_fragment: string): TokenMap {
    let pairs: [string, string][] = uri_fragment.split(/[#&]/).map(function(entry) {
        let parts = entry.split(/=/)
        return [String(parts[0]), String(parts[1])]
    });
    let payload = Object.fromEntries(pairs);
    return {
        id_token: payload.id_token
    }
}