const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 8000;

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Initialize leads.json if it doesn't exist
async function initializeLeadsFile() {
    const leadsPath = path.join(__dirname, 'leads.json');
    try {
        await fs.access(leadsPath);
    } catch (error) {
        // File doesn't exist, create it with empty array
        await fs.writeFile(leadsPath, '[]');
        console.log('leads.json initialized with empty array');
    }
}

// Handle form submission
app.post('/submit-lead', async (req, res) => {
    try {
        const { fullName, email, phone, company, message } = req.body;
        
        // Basic validation
        if (!fullName || !email || !company) {
            return res.status(400).send('Required fields missing');
        }

        // Create lead object with timestamp
        const lead = {
            fullName,
            email,
            phone: phone || 'Not provided',
            company,
            message: message || 'Not provided',
            timestamp: new Date().toISOString()
        };

        // Read existing leads
        const leadsPath = path.join(__dirname, 'leads.json');
        const leadsData = await fs.readFile(leadsPath, 'utf8');
        const leads = JSON.parse(leadsData);

        // Add new lead
        leads.push(lead);

        // Write back to file
        await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2));

        // Redirect to thank you page
        res.redirect('/thankyou.html');
    } catch (error) {
        console.error('Error processing lead:', error);
        res.status(500).send('Error processing your request');
    }
});

// Routes for static pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/thankyou', (req, res) => {
    res.sendFile(path.join(__dirname, 'thankyou.html'));
});

// Initialize leads.json and start server
initializeLeadsFile()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error initializing server:', error);
        process.exit(1);
    });
