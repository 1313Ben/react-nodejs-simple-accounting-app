const express = require('express');
const router= express.Router();
const {addEntry, getAllEntries, getEntry, updateEntry, deleteEntry} = require('./controller');

router.use( (req, res, next) =>{
    console.log('User query Time:', Date());
    next();
  });
  
router.post('/entry', addEntry);
router.get('/entries', getAllEntries);
router.get('/entry/:id', getEntry);
router.put('/entry/:id', updateEntry);
router.delete('/entry/:id', deleteEntry);

module.exports={
    router: router
}

// To implement categorie objects //  These are prdefined categories:
/* "Haushalt", "Gesundheit", "Transport", "Bekleidung", "Versicherungen",
   "Wohnen", "Electronic", "Freizeit","Geschenke", "Bank", "Verschiedenes" */

// To implemnt  account objects // These are predefined accounts:
/* "Migros Bank", "Raiffeisen", "Kreditkarte", "Portmonnaie" */


/* router.get('/', (req, res) => {
  const str = [{
    "message": "Backend server works fine"
  }];
  res.end(JSON.stringify(str));
}); */
