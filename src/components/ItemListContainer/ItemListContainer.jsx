import { 
    Box,
    Image,
    Text,
    Heading,
    Flex,
    Spacer,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button } from "@chakra-ui/react";

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
                                <Card>
                                    <CardBody>
                                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'></Image>
                                        <Heading fontSize='xl'>{product.name}</Heading>
                                        <p>{product.description}</p>
                                        <Flex alignItems={'center'}>
                                            <Box>
                                                <p>{product.price}</p>
                                            </Box>
                                            <Spacer />
                                            <Box>
                                                <Button colorScheme='blue'>COMPRAR</Button>
                                            </Box>
                                        </Flex>
                                    </CardBody>
                                </Card>
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