enum OrderStatus{
    Pending = 'Pending',
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled',
    Returned = 'Returned'
}

const myStatus: OrderStatus = OrderStatus.Pending;
console.log(myStatus);

enum ArrowKeys{
    Up = 'ArrowUp',
    Down = 'ArrowDown',
    Left = 'ArrowLeft',
    Right = 'ArrowRight'
}