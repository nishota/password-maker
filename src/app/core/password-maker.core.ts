export class PasswordMakerCore {
    private readonly characters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private readonly seed = '';

    constructor() {
        const temp = this.characters;
        let allLength = this.characters.length;
        // TODO オプションによって残す文字を変える

        // Charactersを混ぜる
        while (allLength) {
            const i = Math.floor(Math.random() * allLength);
            this.seed += temp[i];
            temp.slice(i);
            allLength--;
        }
    }

    public Generate(): string {
        return this.seed.charAt(Math.floor(Math.random() * this.seed.length));
    }

}
