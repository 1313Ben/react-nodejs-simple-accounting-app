
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const str = [{
    "message": "Backend server works fine"
  }];
  res.end(JSON.stringify(str));
});

module.exports = router;

// To implement categorie objects //  These are prdefined categories:
/* "Haushalt", "Gesundheit", "Transport", "Bekleidung", "Versicherungen",
   "Wohnen", "Electronic", "Freizeit","Geschenke", "Bank", "Verschidenes" */

// To implemnt  account objects // These are predefined accounts:
/* "Migros Bank", "Raiffeisen", "Kreditkarte", "Portmonnaie" */


// To implment entries database
