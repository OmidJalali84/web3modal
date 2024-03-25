import "./App.css";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: { 1: process.env.NEXT_PUBLIC_RPC_URL }, // required
    },
  },
};

function App() {
  async function connectWallet() {
    try {
      console.log("fuck");
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions, // required
      });

      const web3ModalProvider = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(web3ModalProvider);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>fuck you</button>
      </header>
    </div>
  );
}

export default App;
