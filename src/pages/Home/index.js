import { useState } from "react"
import { ConnectButton } from "web3uikit"

const Home = () => {
	const [allowance, setAllowance] = useState()
	return (
		<>
			<ConnectButton />
			<div>home</div>
		</>
	)
}

export default Home
