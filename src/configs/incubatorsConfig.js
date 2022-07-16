import wings from '../contracts/ticketsContracts/wings'
import wbnbContract from '../contracts/wbnbContract';
import busdContract from '../contracts/busdContract';


export const purchasePackTicketWingsConfigs = {
    chain: 'bsc',
    token_address: '0x5EB4f1aa3a2aEf94f7F6868bb1c96945E633358A',
    contract_abi: wings,
    functionName: 'purchasePack',
    tokenName: 'ticketMISAD',
}

export const busdApprove = {
    chain: 'bsc',
    token_address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    contract_abi: busdContract,
    functionName: 'approve',
    tokenName: 'BUSD',
}





export const wbnbApprove = {
    chain: 'bsc',
    token_address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    contract_abi: wbnbContract,
    functionName: 'approve',
    tokenName: 'WBNB',
}