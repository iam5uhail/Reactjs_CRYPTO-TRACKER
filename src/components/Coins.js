import React, { useState, useEffect } from 'react'
import { server } from "../index"
import axios from "axios"
import { Container, HStack,Button, RadioGroup,Radio } from "@chakra-ui/react"
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'

const Exchanges = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")

  const currencySymbol = currency === "inr" ? "₹" : currency=== "usd" ? "$" : "€";

  const changePage =(page)=>{
    setPage(page)
    setLoading(true)
  }

  const btns= new Array(132).fill()

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoins()
  }, [currency, page])

  if (error) return <ErrorComponent msg={"error while fetching coins"} />

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? (<Loader />) : (<>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack p={"6 "}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              coins.map((i) => (
                <CoinCard id={i.id} key={i.id} name={i.name} currencySymbol={currencySymbol} symbol={i.symbol} img={i.image} price={i.current_price} />
              ))
            }
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((value,index)=>(
                <Button key={index} bgColor={"blackAlpha.900"} color={'white'} onClick={()=>changePage(index+1)}>{index+1}</Button>
              ))
            }
          </HStack>
        </>)
      }

    </Container>
  )
}

export default Exchanges