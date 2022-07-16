import { useWeb3Contract, useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import { useState } from "react";
import './botao.css'
import Backdrop from "components/Backdrop";

/*   exemplo de ConstractJson que na verdade é um objeto
const exemploJson = {
    chain: 'bsc',
    token_address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    contract_abi: busdContract,
    functionName: 'approve',
    tokenName: 'BUSD',
}
*/

//  <Web3Button  spenderAddress={ } userWallet={ } funOnSuccess={ } runContractParams={ } runContractJson={ } runApproveJson={ } btnLabel={ } />

const Web3Button = ({ parentIsLoading, allowance, setAllowance, width, spenderAddress, userWallet, funOnSuccess, runContractParams, runContractJson, runApproveJson, btnLabel, runApproveParams }) => {

    const { Moralis } = useMoralis();

    const [loading, setLoading] = useState(false)

    const { runContractFunction: runContract } = useWeb3Contract({
        abi: runContractJson.contract_abi,
        contractAddress: runContractJson.token_address,
        functionName: runContractJson.functionName,
        params: runContractParams,
    });

    const { runContractFunction: runApproveToken, error: approveError } = useWeb3Contract({
        abi: runApproveJson.contract_abi,
        contractAddress: runApproveJson.token_address,
        functionName: runApproveJson.functionName,
        params: runApproveParams || {
            spender: spenderAddress,
            amount: Moralis.Units.Token('1000000000000000000000', 18)
        },
    });




    const handleApproveToken = async () => {
        setLoading(true)
        await runApproveToken({
            onError: (e) => {
                setLoading(false)
                console.log('approveError', approveError)
                return toast.error(e?.data?.message);
            },
            onSuccess: (tx) => {
                tx.wait().then((finalTx) => {
                    toast.success('Approve successful') 
                    setAllowance('1000000000000000')
                    setLoading(false)
                })
            }
        });
    }

    const handlePurchasePack = async () => {
        setLoading(true)
        await runContract({
            onError: (e) => {
                toast.error('Insuficient Misad tokens')
                setLoading(false)
            },
            onSuccess: (tx) => {
                tx.wait().then((finalTx) => {
                    funOnSuccess()
                    setLoading(false)
                })
            }
        });
    };


    const functionHandler = () => {
        if (allowance > 0) {
            handlePurchasePack()
        } else {
            handleApproveToken()
        }
    }

    return (
        <>
            <Backdrop loading={parentIsLoading || loading} />
            {(!loading || !parentIsLoading) && <button style={{ width: width ? width : '' }} className="myButton" disabled={loading} onClick={() => functionHandler()}>{userWallet ? allowance > 0 ? btnLabel : "APPROVE" : 'CONNECT WALLET'}</button >}
        </>
    )

}


export default Web3Button