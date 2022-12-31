import React from 'react'
import {Avatar, Box, Stack, VStack,Text} from "@chakra-ui/react"
import img from "../image/suhail.jpeg"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>
    <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center","flex-start"]}>
            <Text fontWeight={"bold"} fontSize={"40"}>Abous us</Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in india, we provide our guidance at reasonable price.</Text>
        </VStack>
        <VStack>
            <Avatar boxSize={"28"} mt={["4","0"]} src={img}/>
            <Text color={"green"}>Our Founder
              <hr/>
            </Text>
        </VStack>
    </Stack>
    </Box>
  )
}

export default Footer