import { Box, Image, Text, Flex, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

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
                                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'></Image>
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