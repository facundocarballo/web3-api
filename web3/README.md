# Web3 API

## /eth-balance
This endpoint needs two arguments to work propertly.
- rpc
> URL to connect with a particular node of a specific blockchain.
- address
> Address of the wallet that want to see the balance.

---
This endpoint returns the balance of the wallet in the blockchain that the node is running.

## /erc20-balance
This endpoints needs three arguments to work propertly.
- rpc
> URL to connect with a particular node of a specific blockchain.
- address
> Address of the wallet that want to see the balance.
- contractAddress
> Address of the ERC20 Contract that we want to see the balance of.