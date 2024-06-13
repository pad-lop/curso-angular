export interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description: "Nokia",
	price: 1500.5,
};

const tablet: Product = {
	description: "iPad Air",
	price: 2100.75,
};

export interface TaxCalculationOptions {
	tax: number;
	products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
	let total = 0;

	let { tax, products } = options;

	products.forEach(({ price }) => {
		total += price;
	});

	return [total, total * tax];
}

const tax = 0.15;
const shoppingCart = [phone, tablet];

const [total, taxResult] = taxCalculation({
	tax,
	products: shoppingCart,
});

console.log(total, taxResult);
