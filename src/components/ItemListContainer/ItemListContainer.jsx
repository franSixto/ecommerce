import {
  Box,
  Image,
  Heading,
  Flex,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  CardFooter,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";

export const ItemListContainer = ({ products }) => {
  return products.map((product) => (
    <Card key={product.id} maxW="sm">
      <CardBody>
        <Image
          src={product.thumbnail}
          alt={product.title}
          borderRadius="lg"
          width={"100%"}
          objectFit={"cover"}
          maxHeight={"344px"}
          height={"344px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text 
            color="green.900"
          >
            <Box 
            backgroundColor="green.100"
            textAlign={"end"}
            fontSize="2xl"
            borderRadius={10}
            padding={2}
            >{product.price}</Box>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" width={'100%'} justifyContent="space-between">
          <Button variant="ghost" colorScheme="green">
            Add to cart
          </Button>
          <Button variant="solid" colorScheme="green">
            Buy now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ));
};
