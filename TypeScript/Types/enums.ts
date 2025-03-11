enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED,
    REJECTED 
}

const myStatus: OrderStatus = OrderStatus.PENDING;
console.log(myStatus); // 0

enum ArrowKeys{
    UP="up",
    DOWN="down",
    LEFT="left",
    RIGHT="right",
    ERROR=234
}

ArrowKeys.DOWN