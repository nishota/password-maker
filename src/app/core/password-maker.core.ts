export class PasswordMakerCore {
    private readonly characters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()';
    private readonly seeds = '';

    constructor() {
        const temp = this.characters;
        let allLength = this.characters.length;
        // オプションによって残す文字を変える

        // Charactersを混ぜる
        while (allLength) {
            const i = Math.floor(Math.random() * allLength);
            this.seeds += temp[i];
            temp.slice(i);
            allLength--;
        }
    }

    public Generate(): string {
        return this.seeds.charAt(Math.floor(Math.random() * this.seeds.length));
    }

}