import cartModel from "./models/cart.js";
import productsModel from "./models/product.js";

export default class cartDAO{
    getCartById = (id, options={}) => {
        if(options.populate) return cartModel.findOne({_id: id}).populate('products._id').lean();
        return cartModel.findOne({_id: id}).lean();
    };
    createCart = () => {
        return cartModel.create({products: []});
    };
    updateCart = (id, cart) => {
        return cartModel.findByIdAndUpdate(id, {$set: cart});
    };
    deleteProductById = (params) => {
        return productsModel.findOneAndRemove(params);
    }
    deleteCart = (params) => {
        return productsModel.findOneAndRemove(params)
    }
};