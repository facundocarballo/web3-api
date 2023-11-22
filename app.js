const express = require('express');
const { GetERC20Balance, GetETHBalance } = require("./web3/index");
const app = express();
const port = 8088; // Puedes cambiar el puerto si es necesario

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get("/eth-balance", async (req, res) => {
    const address = req.query.address;
    const rpc = req.query.rpc;

    if (!address || !rpc) {
        return res.status(400).send('address and rpc are needed as parameters.');
    }

    const ethBalance = await GetETHBalance(rpc, address);
    res.send(`ETH Balance: ${ethBalance}`)
})

app.get("/erc20-balance", async (req, res) => {
    const rpc = req.query.rpc;
    const contractAddress = req.query.contractAddress;
    const address = req.query.address;

    if (!address || !rpc || !contractAddress) {
        return res.status(400).send('address, rpc and contractAddress are needed as parameters.');
    }

    const ethBalance = await GetERC20Balance(rpc, address, contractAddress)
    res.send(`ERC20 Balance: ${ethBalance}`)
})

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
