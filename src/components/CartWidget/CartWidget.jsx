import { Flex, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () =>{
    return(
        <Flex alignItems={'center'} justifyContent={'space-between'} >
            <FaCartShopping size={24}/>
            <Text fontSize={'18px'}>0</Text>
        </Flex>
    )
}