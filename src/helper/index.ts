export const arrayUnique = (arr: object[], key: string) => {
    return Array.from(new Map(arr.map((item: any) => [item[key], item])).values())
}