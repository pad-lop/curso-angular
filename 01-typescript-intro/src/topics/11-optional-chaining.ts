export interface Passenger {
    name: string,
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Pedro',
    children:['Natalia', 'Elizabeth']
}

const howManyChildren = (passenger:Passenger) => {
    
    // ! le dice a typescript que confie, que siempre recibirá la propiedad children 
    // const howManyChildren = passenger.children!.length;
    
    const howManyChildren = passenger.children?.length || 0;
    
    console.log("Nombre: ", passenger.name, " - Numero de hijos: ", howManyChildren)
}

howManyChildren(passenger2)
howManyChildren(passenger1)