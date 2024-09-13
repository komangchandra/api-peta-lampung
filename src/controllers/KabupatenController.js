import { response } from "express";
import { db } from "../config/Database.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const getAllKabupaten = async (req, res) => {
  try {
    const kabupatenCollection = collection(db, "Kabupaten");
    const kabupatenSnapshot = await getDocs(kabupatenCollection);
    const kabupatenList = kabupatenSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json({
      statusCode: 200,
      message: "List Kabupaten/Kota di Lampung",
      data: kabupatenList,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createKabupaten = async (req, res) => {
  const { namaKabupaten } = req.body;

  if (!namaKabupaten) {
    return res.status(400).json({ error: "Nama kabupaten is required" });
  }

  try {
    const kabupatenCollection = collection(db, "Kabupaten");
    const docRef = await addDoc(kabupatenCollection, {
      namaKabupaten: namaKabupaten,
    });
    res.status(201).json({
      statusCode: 200,
      message: "List Kabupaten/Kota di Lampung",
      data: {
        id: docRef.id,
        namaKebupaten: namaKabupaten,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};