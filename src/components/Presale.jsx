import React from "react";
import Btn from "./Btn";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { active_network, config } from "config";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { useRef } from "react";
import { useCountdown } from "hooks/useTimer";
import { DESTINATION_WALLET, useBalance } from "hooks";
import { useCallback } from "react";
// @ts-ignore
import toast from "react-hot-toast";
import { addData } from "hooks/firebase";
import { useEffect } from "react";
import { getRaised, getTransactions } from "../hooks/firebase";

const startDate = "2024-01-25T18:00:00.000Z";
const endDate = "2024-01-27T22:00:00.000Z";

const Presale = () => {
  // const connection = new Connection(clusterApiUrl('devnet'));
  const connection = new Connection(active_network);
  const { publicKey, sendTransaction } = useWallet();
  const [trx, setTrx] = useState("");
  const [raised, setRaised] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);
  const [raised_percentage, setRaisedPercentage] = useState("0");
  const [participants, setParticipants] = useState(0);
  const inputRef = useRef(null);
  const [sol_spend_amount, setSolSpendAmount] = useState(1);
  const balance = useBalance();
  const [value, setValue] = useState("presale");
  const [active, setActive] = useState(50);
  const [working, setWorking] = useState(false);
  const handleTransfer = useCallback(async () => {
    console.log("sol_spend_amount", sol_spend_amount);
    if (!publicKey) throw new Error("Wallet not connected");

    if (sol_spend_amount == 0 || working) {
      toast.error("Enter a valid amount of SOL");
      return;
    }
    if (sol_spend_amount < 1 || sol_spend_amount > 100) {
      toast.error("you can spend 0.1 to 100 SOLs");
      return;
    }
    if (sol_spend_amount > balance) {
      toast.error(
        `You want to spend ${sol_spend_amount} SOLs but your balance is ${balance}`
      );
      return;
    }
    setWorking(true);

    const share = sol_spend_amount * LAMPORTS_PER_SOL;

    console.log("Share", share);
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(DESTINATION_WALLET),
        lamports: share,
      })
    );

    let raised_amount = share / LAMPORTS_PER_SOL;
    try {
      const signature = await sendTransaction(transaction, connection);
      setTrx(`https://solscan.io/tx/${signature}`);
      console.log(`https://solscan.io/tx/${signature}`);


      toast.success(
        "Purchase successfull " +
          `https://solscan.io/tx/${signature}?cluster=devnet`
      );
      // Handle successful transfer here
    } catch (error) {
      raised_amount = 0;
      console.error("Transaction failed:", error);
      // Handle transaction failure here
    }
    setWorking(false);
    addData(raised_amount, publicKey.toBase58());
  }, [publicKey, sendTransaction, connection, sol_spend_amount]);

  useEffect(() => {
    getRaised().then((amount) => {
      setRaised(amount);
    });

    getTransactions().then((count) => {
      setTransactionCount(count);
    });
  }, []);
  return (
    <>
      <div
        id="presale"
        className=" my-[4rem]">
        <div className=" flex justify-center items-center gap-[0.5rem]">
          <img src="/home/token.svg" alt="" />
          <h2 className=" md:text-[56px] text-[30px] font-bold text-center ">
            PRESALE
          </h2>
        </div>
        <img src="/home/bottom_border.svg" alt="" className="mx-auto " />
      </div>
      <div
        className=" flex justify-around md:flex-row flex-col md:h-[550px] h-auto mt-[2rem]"
      >
        <div className="  md:w-[500px] w-[98%] h-[400px]  rounded-[30px] shadow-lg p-4 flex flex-col items-center mx-auto py-[3rem] mt-[6rem] gap-[0.5rem] md:text-[30px] font-semibold justify-center border border-[rgb(51,188,36)] box">
          <p>1 SOL = 50,000 $KAA</p>
          <p>Current Raise {raised.toFixed(3)}</p>
          <div className=" relative">
            <input
              onChange={(e) => {
                setSolSpendAmount(+e.target.value);
              }}
              defaultValue="1 - 10 sols"
              type="text"
              placeholder=""
              className=" bg-[#000] pl-3 border rounded-[20px] border-[rgb(51,188,36)] py-[0.5rem] md:w-auto w-[300px] "
            />
            <p className=" absolute right-4 md:top-3 top-2 md:text-[24px] text-[16px]">
              sol
            </p>
          </div>
          <div>
            <p className=" md:text-[15px] text-[12px] text-center my-2">
              *Can also send SOL to EnSawje2vQSQKtGbPY
              dXEuYKm2sHgeLKJTqCmrDErKEA from a decentralised wallet
            </p>
          </div>
          <Btn
            onClick={() => {
              handleTransfer();
            }}
            text={"Buy Now"}
            style={"w-[98%] my-[2rem] "}
          />
        </div>
        <div>
          <img src="/presale/1_13.gif" alt="" className=" w-[400px]" />
          <p className=" md:text-[18px] text-[14px] text-[rgb(51,188,36)] text-center">
            Current Bonus Rate {transactionCount > 10 ? "30%" : "50%"}
          </p>
          <div className=" w-[95%] border border-[rgb(51,188,36)] h-[30px] my-[0.5rem] rounded-[30px]">
            <div className=" w-[75%]  bg-[rgb(51,188,36)] h-[30px] rounded-[30px]"></div>
          </div>
        </div>
        <div className="  md:w-[500px] w-[98%] md:h-[400px] h-auto rounded-[30px] shadow-lg p-8 flex flex-col  mx-auto py-[3rem] mt-[6rem] gap-[0.5rem] md:text-[30px] font-semibold justify-center border border-[rgb(51,188,36)] text-[rgb(51,188,36)] ">
          <p className="text-center">HOW TO BUY</p>
          <div className=" relative md:text-[18px] text-[14px]">
            <p>Press Buy Now button and connect wallet</p>
            <p>Enter amount of SOL to buy $KAA</p>
            <p>Hit 'Buy Now' again and confirm transaction</p>
            <p>Can't connect your wallet? just send SOL to : </p>
            <img
              src="/presale/scan.jpg"
              alt=""
              className=" w-[130px] mx-auto my-2"
            />
          </div>
          <div>
            <p className=" md:text-[15px] text-[12px] my-0">
              * Do NOT use a CEX to send SOL Use your Decentralized wallet
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[85%] mx-auto my-[1rem]">
        <button className=" border w-full py-2 border-[rgb(51,188,36)] rounded-[12px] shadow-md text-[rgb(51,188,36)] transition-all ease-linear delay-150 md:text-[16px] text-[12px] ">
          Token will be airdropped to your wallet after the presale completes
        </button>
      </div>
    </>
  );
};

export default Presale;
