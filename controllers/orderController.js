import Order from "../models/order.js";
export async function createOrder(req,res){
    const  data = req.body;
    const orderInfo = {
        orderedItems : []
    }

    if(req.user== null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return
    }
    orderInfo.email = req.user.email;

    const lastOrder = await Order.find().sort({orderDate:-1}).limit(1);

    if(lastOrder.length == 0){
        orderInfo.orderId = "ORD0001";
    }else{
        const lastOrderId = lastOrder[0].orderId;//"ORD0065"
        const lastOrderNumberInString = lastOrderId.replace("ORD","");//"0065"
        const lastOrderNumber = parseInt(lastOrderNumberInString);//65
        const currentOrderNumber = lastOrderNumber + 1;//66
        const formattedNumber = String(currentOrderNumber).padStart(4, '0');//"0066"
        orderInfo.orderId = "ORD" + formattedNumber;
    }
}