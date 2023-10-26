import ProductModel from "./product.model.js";
import ProductRepository from './product.repository.js';

export default class ProductController{
    constructor(){
        this.productRepository=new ProductRepository();
    }

    async getAllProducts(req,res){
        try{
            const products = await this.productRepository.getAll();
            res.status(200).send(products);

        }catch(err){
       console.log(err);
       return res.status(200).send("Something went wrong");
        }
    }

    async addProduct(req, res){
        try{
        const {name, price, sizes} = req.body;
        const newProduct=new ProductModel(name,null,parseFloat(price),
        req.file.filename,null,sizes.split(','));

        const createdRecord=await this.productRepository.add(newProduct);
        res.status(201).send(createdRecord);
        }catch(err){
    console.log(err);
    return res.status(200).send("Something went wrong");
  }    
    }

    filterProducts(req,res){
        const minPrice=req.query.minPrice;
        const maxPrice=req.query.maxPrice;
        const category=req.query.category;
        const result=ProductModel.filter(minPrice,maxPrice,category);
        res.status(200).send(result);
    }

    async getOneProduct(req,res){
        try{
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            res.status(404).send('Product not found');
        } else{
            return res.status(200).send(product);
        }
    }catch(err){
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
    }
    rateProduct(req, res,next) {
        console.log(req.query);
        const userID = req.query.userID;
        const productID = req.query.productID;
        const rating = req.query.rating;
        try {
            ProductModel.rateProduct(
                userID,
                productID, 
                rating
                );            
            return res.status(200).send('Rating has been added');
        } catch(err){
            console.log("Passing error to middleware");
            next(err);
          }
      }     

}