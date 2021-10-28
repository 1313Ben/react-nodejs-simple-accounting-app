const db = require('../dba/db');
const Entry = require('../model/Entry');
const Account = require('../model/Account');

const firestore= require('firebase/firestore');
const entriesRef= db.accdb.collection('entries');
const accountsRef = db.accdb.collection('accounts');

const addEntry = async (req, res, next)=>{
    try{
        const entry = await entriesRef.doc().set(req.body);
        console.log(entry);
        res.send('Entry saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}


const getAllEntries = async (req, res, next)=>{
    try{
       
        const data = await entriesRef.get();
        const entryList = [];
        if(data.empty){           
           res.status(404).send('Data not found');
           console.log("Data not found");
        }else{          
          data.forEach( (doc)=>{
              let entry = doc.data();
              entryList.push(
                  new Entry(entry.id, entry.date, entry.type, entry.amount, entry.accountName,
                     entry.currency, entry.category, entry.comment)
              );
          })
          console.log(JSON.stringify(entryList));
          res.send(JSON.stringify(entryList));  
        }
       
    }catch(error){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}


const getEntry = async (req, res, next)=>{
    try{
        const entry_id= req.params.id;
        const entryData = await entriesRef.doc(entry_id);
        const entry = await entryData.get();
        if(entry){
            res.send(JSON.stringify(entry));
        }else{
            res.status(404).send('Entry not found');
        }
      
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteEntry = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const entry = await entriesRef.doc(id).delete();        
        res.send('Entry record deleted successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateEntry = async (req, res, next)=>{
    try{
        const id= req.params.id;
        const entry = await entriesRef.doc(id);
        const data = req.body;
        await entry.update(data);
        res.send('Entry record updated successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}



module.exports = { getEntry, getAllEntries, updateEntry, deleteEntry, addEntry}