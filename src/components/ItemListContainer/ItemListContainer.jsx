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

const ItemListContainer = ({ products }) => {
  return products.map((product) => (
    <Card key={product.id} maxW="sm">
      <CardBody>
        <Image src={product.thumbnail} alt={product.title} borderRadius="lg" minWidth={"100%"} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ));
};

export default ItemListContainer;
