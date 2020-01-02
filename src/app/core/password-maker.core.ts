export class PasswordMakerCore {
    private readonly characters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private seed = '';

    constructor(hasOmoji: boolean, hasKomoji: boolean, hasSuji: boolean, hasSameChar: boolean) {
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
        if (!hasSameChar) {
            temp = temp.replace(/[IJl1jiOo0]+/g, '');
        }
        // TODO Charactersを混ぜたい
        // let allLength = temp.length;
        // while (allLength) {
        //     const i = Math.floor(Math.random() * allLength);
        //     this.seed += temp[i];
        //     allLength--;
        // }
        this.seed = temp;
    }

    public Generate(num: number, hasDuplication: boolean): string {
        let result = '';
        let roop = num;
        const tempArr = [];
        while (roop) {
            const char = this.seed.charAt(Math.floor(Math.random() * this.seed.length));
            if (!hasDuplication) {
                if (!tempArr.includes(char)) {
                    result += char;
                    tempArr.push(char);
                    roop--;
                }
            } else {
                result += char;
                roop--;
            }
        }
        return result;
    }

}
