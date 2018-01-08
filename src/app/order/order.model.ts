class Order{
  constructor(
    public address: string,
    public number: string,
    public optinalAddress: string,
    public paymentsOptions: string,
    public orderItems: OrderItem[] = []
  ){}
}
class OrderItem{
  constructor(public quantity:number,public menuId:string){

  }
}
export{Order, OrderItem}
