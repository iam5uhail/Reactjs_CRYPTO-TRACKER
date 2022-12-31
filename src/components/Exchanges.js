import React, { useState, useEffect } from 'react'
import { server } from "../index"
import axios from "axios"
import { Container, HStack } from "@chakra-ui/react"
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,setError]=useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setExchanges(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchExchanges()
  }, [])

  if(error) return <ErrorComponent msg={"error while fetching exchanges"}/>

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? (<Loader />):(<>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              exchanges.map((i) => (
                <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
              ))
            }
          </HStack>
        </>)
      }

    </Container>
  )
}

export default Exchanges