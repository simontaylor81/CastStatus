import Cast from './cast';

export default class CastSet {
    casts: Cast[];

    constructor() {
        // TEMP
        this.casts = ['Kitchen', 'Living Room', 'All'].map(name => {
            let cast = new Cast();
            cast.name = name;
            return cast;
        });
    }
}
