const express = require('express');
const router = express.Router();
const generatePDF = require('../puppeteer-scripts/generatePDF');

router.get('/generate', async (req, res) => {   
    let url = req.body.url;
    if (!url) {
        url='https://www.google.com';
        // return res.status(400).send('URL is required');
    }

    try {
        const pdf = await generatePDF(url);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': pdf.length
        });
        res.send(pdf);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating PDF');
    }
});

module.exports = router;