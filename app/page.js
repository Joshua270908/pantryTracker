'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";
import { Box, Typography } from "@mui/material";
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc,} from "firebase/firestore";

export default function Home() {
  const {inventory, setInventory} = useState([])
  const { open, setOpen} = useState(false)
  const {itemName, setItemName} = useState('')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = [];
    docs.forEach((docs)=>{
      inventoryList.push({
        name: docs.id,
        ...docs.data(),
      })
    })
    setInventory(inventoryList)
    console.log(inventoryList)
  }

  useEffect(()=>{
    updateInventory()
  }, [])

  return (
    <Box>
      <Typography variant = "h1">Pantry tracker</Typography>
      {inventory.forEach((item) => {
        console.log(item)
        return (
        <Box>
        {item.name}
        {item.count}
        </Box>
      )
    })}
    </Box>
  )
}
