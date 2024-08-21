import { Box, Text, Flex } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
    return(
        <Box
        width={'100vw'}
        height={'90vh'} 
        display={'Flex'}
        alignItems={'center'} 
        justifyContent={'center'}>
            <Flex>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='bold'
                    >
                    {greeting}
                </Text>
            </Flex>
        </Box>
    )
}

export default ItemListContainer;