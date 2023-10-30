import { MongoClient } from "mongodb";
// const url="mongodb://localhost:27017/ecomdb";
// const url = "mongodb://127.0.0.1:27017/ecomdb";

let client;
export const connectToMongoDB=()=>{
    MongoClient.connect(process.env.DB_URL).then(clientInstance=>{
        client=clientInstance;
        console.log("mongodb is connected");
        createCounter(client.db());
        createIndex(client.db());
    }).catch(err=>{
        console.log(err);
    })
}

export const getDB=()=>{
    return client.db();
}

const createCounter=async (db)=>
{
    const existCounter= await db.collection("counters").findOne({_id:'cartItemID'});
    if(!existCounter){
        await db.collection("counters").insertOne({_id:'cartItemID',value:0});
    }
}

const createIndex=async (db)=>{
    try{
        await db.collection("products").createIndex({price:1});
        await db.collection("products").createIndex({name:1,category:-1});
        await db.collection("products").createIndex({desc:"text"});
    }catch(err){
        console.log(err);
    }
    console.log("index is created");

    
}