var mongodb = require('mongoose');
mongodb.connect("mongodb://localhost/safe_garage", (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connected");
    }
});
var collectionUsers = mongodb.Schema({
    firstName: String,
    secondName: String,
    middleName: String,
    lastName: String,
    phoneNumbers: Array,
    email: String,
    password: String,
    uploadID: String,
    roles: Boolean

});
var users = mongodb.model("users", collectionUsers);
var collectionTransactions = mongodb.Schema({
        make: String,
        model: String,
        year: String,
        licensePlate: String,
        vinNumber: String,
        color: String,
        engine: String,
        uploadRegestrationID: String,
        additionaInformation: Array,
        transactionOwner: String,

});
var transactions = mongodb.model("transactions", collectionTransactions);
// ------------------------------------------------------------------------------
//Register Function
let addUser = (callBack, data) => {
    users.find({ email: data.email }, (error, response) => {
        if (error) { console.log(error) }
        else {
            if (response.length === 0) {
                var user = new users({
                    firstName: data.firstName,
                    secondName: data.secondName,
                    middleName: data.middleName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    phoneNumbers: data.phoneNumbers,
                    uploadID: data.id,
                    roles: data.roles
                });
                user.save((error, response) => {
                    if (error) {
                        console.log(error)
                    }
                    else {
                        callBack(response);
                    }
                });
            }
            else { callBack("There Are Someone Has Same Email ") }
        }
    })
    console.log("DONE Add");
}

//Update User Account
let updateUser = (callback, userInfo, id) => {
    users.findByIdAndUpdate(id, {
        firstName: userInfo.firstName,
        secondName: userInfo.secondName,
        middleName: userInfo.middleName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        phoneNumbers: userInfo.phoneNumbers,
        uploadID: userInfo.id,
    }, (error, response) => {
        if (error) {
            console.log(error)
        }
        else { callback(response) }
    })



}

//Login Function
let login = (callback, userInfo) => {
    console.log(userInfo);
    users.findOne({ email: userInfo.email, password: userInfo.password }, (error, response) => {
        if (error) {
            console.log(error)
        }
        else {
            if(response!== null){
                // getTransactions(callback, response._id);
                callback(response._id)
            }
     


        }
    });
}


//Add Transaction
let addTransaction = ( callBack , data, id) => {
    
    // transactions = new transactions(
        // let tranData = {data , transactionOwner:id}
        data.transactionOwner = id;
        console.log(data);

    let a = transactions.insertMany([data] , (error , response)=>
    {
    
        if(error)
        {
            console.log(error);
        }
        callBack("Done Add");
        // callBack(data)
        // getTransactions(callBack)

    })


    
}

//Get All User's Transactions

let getTransactions = (callBack, id) => {

//{$or:[{make:"Mohammad"},{additionaInformation:{$elemMatch:{byerID:"Mohammad"}}}]}
    // transactions.find({ transactionOwner: id }, (error, response) => {

        transactions.find({$or:[{transactionOwner: id},{additionaInformation:{$elemMatch:{buyerID:id}}}]}, (error, response) => {
      
            if (error) {
            console.log(error);
        }
        else {
            // console.log(response)
            callBack(response)
        }

    })
  
}


let editPassword = (callBack, userPassword, id) => {


    users.findByIdAndUpdate(id, {

        password: userPassword.password,

    }, (error, response) => {
        if (error) {
            console.log(error)
        }
        else { callBack(response) }
    })

}



let getUser = (callBack, id) => {
    users.findOne({_id:id} , (error , response)=>
    {
        if (error) {
            console.log(error);
        }
        else { 
           callBack(response);
        
        
        }

    })



  

}



module.exports = { register: addUser, login, updateUser, addTransaction, getTransactions, editPassword , getUser }