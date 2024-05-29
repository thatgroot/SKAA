import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const ConnectWallet = ({ text }) => {
  const wallet = useWallet();
  return (
    <div
      className={`bg-[rgb(51,188,36)] text-[#fff] rounded-[10px] flex flex-col justify-center items-center text-[16px] font-bold px-[32px] transition-all ease-in-out delay-150 hover:bg-black border border-[rgb(51,188,36)] hover:text-[rgb(51,188,36)] h-[50px] w-[168px]`}
    >
      <WalletMultiButton
        style={{
          padding: 0,
          height: "100%",
          flex: 1,
          backgroundColor: "transparent",
        }}
        children={
          <span className={"w-max"}>
            {wallet.connected ? "Connected" : text}
          </span>
        }
      />
    </div>
  );
};

