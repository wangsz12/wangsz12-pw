const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function getRandomString(length: number) {
    return new Array(length).fill(null).map(() => Math.random() < 0.1 ? ' ' : letters[Math.floor(Math.random() * letters.length)]).join('');
}