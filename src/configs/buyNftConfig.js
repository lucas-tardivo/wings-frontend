import misadNftTestContract from 'contracts/misadNftTestContract'
import misadTestContract from 'contracts/misadTestContract'

export const buyNftConfig = {
    chain: 'bsc testnet',
    token_address: '0x3e0e7d15d5678523a4586e2eaade3ee98ba5a284',
    contract_abi: misadNftTestContract,
    functionName: 'purchasePack',
    tokenName: 'MISADNftTest',
}

export const approveMisad = {
    chain: 'bsc testnet',
    token_address: '0x123E33D8Ba8056908D16F184E96bb4F18F1567A7',
    contract_abi: misadTestContract,
    functionName: 'approve',
    tokenName: 'MISADTest',
}