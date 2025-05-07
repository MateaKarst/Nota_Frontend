const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('server/uploads'));

// Multer configuration
const storage = multer.diskStorage({
    destination: './server/uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Routes
app.post('/upload', upload.single('song'), (req, res) => {
    if (req.file) {
        res.json({ filePath: `http://localhost:${PORT}/${req.file.filename}` });
    } else {
        res.status(400).send('Error uploading file');
    }
});

// Route to delete a file
app.delete('/delete', (req, res) => {
    const { filename } = req.body;

    if (!filename) {
        return res.status(400).send('Filename is required');
    }

    const filePath = path.join(__dirname, 'uploads', filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).send('Error deleting file');
        }
        res.send('File deleted successfully');
    });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
