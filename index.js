import express from 'express';
import Web3 from 'web3';
import abi from './abi.json' assert { type: 'json' };

const app = express();

// Initialize Web3
const web3 = new Web3(process.env.Alchemy_api);

const contractAddress = '0xaF1E5517017F430BbB9529ac28d8cc50D4ddFbf0';
const contract = new web3.eth.Contract(abi, contractAddress);

app.get('/jery-apitest', async (req, res) => {
    try {
        // Replace 'yourContractMethod' with the actual method you want to call on the smart contract
        const data = await contract.methods.yourContractMethod().call();

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        console.error(`Error fetching contract data: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contract data',
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3099;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});
