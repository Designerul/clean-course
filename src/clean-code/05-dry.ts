type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        for( const key in this ) {
            switch( typeof this[key]){
                case 'string':
                    if(this[key].length <= 0) {
                         console.log(Error(`${ key } is empty`));
                         return false;
                    }
                    break;
                case 'number':
                    if(this[key] <= 0) {
                        console.log(Error(`${ key } is zero`));
                        return false;
                    }
                    break;
                default:
                    console.log( Error(`${ key } is not supported`));
                    return false;
            }
        }
        return true;
    }

    toString() {
        // No Dry
        // if (this.name.length <= 0) throw new Error('Name is empty');
        // if (this.price <= 0 ) throw new Error('Price is zero');
        // if (this.size.length <= 0 ) throw new Error('Size is empty');

        // Con Dry
        if( !this.isProductReady() ) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'M');
    console.log(bluePants.toString());
})();