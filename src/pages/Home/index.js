import { useState } from "react"
import { ConnectButton, CryptoLogos } from "web3uikit"
import Backdrop from "components/Backdrop"

import BuyNftModal from "components/BuyNftModal"
import axios from "axios"
import { toast } from "react-toastify"

const Home = () => {
	const [open, setOpen] = useState(false)

	const handleGet = async (id) => {
		try {
			const response = await axios.get(`http://wingofmisadventurewebservice-env.eba-v4g6ts8p.sa-east-1.elasticbeanstalk.com/api/v1/token/${id}`)
			console.log(response.data)
		} catch (error) {
			toast.error(error.response.data.message) //toast é a bandeirinha de notificação, pode ser  toast.success, ou toast.error, ou toast.warning.  Olhar na documentação do react-toastify
		}
	}

	const handlePost = async () => {
		try {
			//  axios.post(url, objeto)
			const response = await axios.post(`http://wingofmisadventurewebservice-env.eba-v4g6ts8p.sa-east-1.elasticbeanstalk.com/api/v1/token/`, {
				nome: 'esse é o body',
				tipo: 'que não é nada mais que um objeto pra enviar'
			})
			console.log(response)
		} catch (error) {
			toast.error(error.response.data.message)
		}
	}

	return (
		<>
			<button onClick={() => handleGet(0)} >Exemplo de Get</button>
			<button onClick={() => handlePost()} >Exemplo de Post</button>
			<Backdrop loading={false} />
			<ConnectButton />
			<CryptoLogos chain="binance" size="46px" />

			{open && <BuyNftModal open={open} setOpen={() => setOpen(false)} price={'Preço do nft aqui'} />}

			<div>home</div>
			<button onClick={() => setOpen(true)}> botrao</button>
		</>
	)
}

export default Home
