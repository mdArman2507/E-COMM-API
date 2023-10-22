import CartItemModel from "./cartItems.model.js";
export default class CartItemController{
    add(req,res){
         const {productID,quantity}=req.query;
         const userID=req.userID;
         CartItemModel.add(productID,userID,quantity);
         res.status(200).send("cart is updated");
    }
    get(req,res){
        const userID=req.userID;
       const item= CartItemModel.get(userID);
        return res.status(200).send(item);
    }
    delete(req,res){
        const userID=req.userID;
        const cartItemID=req.params.id;
       const error= CartItemModel.delete(cartItemID,userID);
       if(error){
        return res.status(404).send(error);
       }
       return res.status(200).send("cartItem removed");
    }
}