export interface Restaurant {
    id: string
    name: string
    category: string
    deliveryEstimate: string //antes estava number
    rating: number //antes estava string
    imagePath: string
    hours?:string
    about?:string
}
