export class PasswordMakerCore {
    private readonly characters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private readonly seed = '';

    constructor(hasOmoji: boolean, hasKomoji: boolean, hasSuji: boolean) {
        let temp = this.characters;
        // TODO オプションによって残す文字を変える
        if (!hasOmoji) {
            temp = temp.replace(/[A-Z]+/, '');
        }
        if (!hasKomoji) {
            temp = temp.replace(/[a-z]+/, '');
        }
        if (!hasSuji) {
            temp = temp.replace(/[0-9]+/, '');
        }

        let allLength = temp.length;
        console.log(allLength);
        console.log(temp);
        // Charactersを混ぜる
        while (allLength) {
            const i = Math.floor(Math.random() * allLength);
            this.seed += temp[i];
            temp.slice(i);
            console.log(temp);
            console.log(this.seed);
            allLength--;
        }
        console.log(this.seed);
    }

    public Generate(num: number): string {
        let result = '';
        let roop = num;
        while (roop) {
            result += this.seed.charAt(Math.floor(Math.random() * this.seed.length));
            roop--;
        }
        return result;
    }

}
