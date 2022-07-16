import React, { useEffect, useState, useContext } from 'react';
import { Box, Modal } from '@mui/material';
import Web3Button from 'components/Web3Button';
import { useMoralis } from 'react-moralis'
import { UserContext } from 'helpers/UserContext';
import { contractAddressByType } from 'configs/contractAddress';
import { approveMisad, buyNftConfig } from 'configs/buyNftConfig'
import Backdrop from 'components/Backdrop';
import { toast } from 'react-toastify';

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BuyNftModal({ open, setOpen, price }) {
    const { userWallet } = useContext(UserContext)
    const { Moralis } = useMoralis()
    const [allowance, setAllowance] = useState('0')
    const [loading, setLoading] = useState(true)

    const handleCheckAllowance = async () => {
        setLoading(true)
        if (userWallet) {
            try {
                const response = await Moralis.Web3API.token.getTokenAllowance({
                    address: contractAddressByType['MISADTest'],
                    spender_address: '0x3e0e7d15d5678523a4586e2eaade3ee98ba5a284',
                    owner_address: userWallet,
                    chain: 'bsc testnet'
                })
                setAllowance(response?.allowance)
                return setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }
    console.log('allowance modal', allowance)
    useEffect(() => {
        setTimeout(() => {
            handleCheckAllowance()
        }, 2000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Backdrop loading={loading} />
            <Modal
                open={open}
                onClose={setOpen}
            >
                <Box sx={modalStyle}>
                    BUY NFT FOR {price}

                    <Web3Button
                        spenderAddress={'0x3e0e7d15d5678523a4586e2eaade3ee98ba5a284'}
                        userWallet={userWallet}
                        parentIsLoading={loading}
                        allowance={allowance}
                        setAllowance={setAllowance}
                        funOnSuccess={() => {
                            toast.success('Purchase Successful')
                            setOpen(false)
                        }}
                        runContractParams={{ packId: 0 }}
                        runContractJson={buyNftConfig}
                        runApproveJson={approveMisad}
                        btnLabel={'Purchase'}
                    />
                </Box>

            </Modal>
        </div>
    );
}















