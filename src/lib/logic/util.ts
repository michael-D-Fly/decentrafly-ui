export function check_required(o: Object, props: string[]) {
    for (let p of props) {
        console.log("CHECK ", props)
        if (!Object.hasOwn(o, p)) {
            throw new Error(`Parameter ${p} missing`)
        }
    }
}