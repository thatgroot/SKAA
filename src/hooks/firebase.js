import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
// @ts-ignore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqEtZAAmlaFr26I7qbCl-ShIn0zKQeLyQ",
  authDomain: "kaa-token.firebaseapp.com",
  projectId: "kaa-token",
  storageBucket: "kaa-token.appspot.com",
  messagingSenderId: "805275780532",
  appId: "1:805275780532:web:8f995200dc5759f7921ee1",
  measurementId: "G-FEH04HMD5T",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const storage = getStorage(app);

export async function getData() {
  try {
    const ref = doc(db, "/raised_collection/raised_record");
    const snapshot = await getDoc(ref);
    return snapshot.data();
  } catch (error) {
    console.error("Error adding document: ", error);
    return {};
  }
}

export async function getTransactions() {
  try {
    const ref = doc(db, "/raised_collection/transactions");
    const snapshot = await getDoc(ref);
    const data = snapshot.data();
    if (data) {
      return Object.keys(data).length;
    }
    return 0;
  } catch (error) {
    console.error("Error adding document: ", error);
    return 0;
  }
}


export async function getRaised() {
  const data = await getData();
  let raised = 0;
  if (data) {
    raised = data.raised ?? 0;
  }
  return raised;
}

export async function getWallets() {
  try {
    const ref = doc(db, "/raised_collection/wallets");
    const snapshot = await getDoc(ref);

    const data = snapshot.data();
    const sum = parseFloat(
      Object.values(data).reduce((p, c) => +p + c)
    ).toFixed(2);
    const length = Object.keys(data).length;
    return { sum, wallets: length, data };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { sum: 0, wallets: 0 };
  }
}
/**
 * @param {number} amount
 * @param {string} wallet
 */
export async function addData(amount, wallet) {
  try {
    const data = await getData();
    let raised = 0;
    if (data) {
      raised = +data.raised ?? 0;
    }
    const ref = doc(db, "/raised_collection/raised_record");
    await setDoc(
      ref,
      {
        raised: raised + amount,
      },
      { merge: true }
    );
    const { data: wallets_data } = await getWallets();
    let wallet_amount = 0;
    if (wallets_data) {
      Object.keys(wallets_data).forEach((key) => {
        if (key === wallet) {
          wallet_amount += +wallets_data[key];
          console.log("wallet amount ", wallets_data[key]);
        }
      });
    }

    const wallets_ref = doc(db, "/raised_collection/wallets");
    await setDoc(
      wallets_ref,
      {
        [wallet]: amount + wallet_amount,
      },
      { merge: true }
    );

    const transactions_ref = doc(db, "/raised_collection/transactions");
    await setDoc(
      transactions_ref,
      {
        [wallet]: Date.now(),
      },
      { merge: true }
    );

    console.log("raised+amount ", raised + amount);
    return raised + amount;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
