import { Box, Text, Flex } from "@chakra-ui/react";

const ItemListContainer = ({ greeting, products }) => {

    console.log(products);
    return(
        <Box
        width={'100vw'}
        height={'90vh'} 
        display={'Flex'}
        alignItems={'center'} 
        justifyContent={'center'}>
            <Flex>
                {
                    products.map(
                        (product) => {
                            return (
                              <Box>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                              </Box>          
                            )
                    }
                )
                }
            </Flex>
        </Box>
    )
}

export default ItemListContainer;