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

export const ItemDetailContainer = ({ product }) => {
  return (
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
          <Heading minHeight={"47px"} size="md">
            {product.title}
          </Heading>
          <Text>{product.description}</Text>
          <Text
            fontSize={"2xl"}
            color="green.900"
            backgroundColor="green.100"
            padding={3}
            borderRadius={5}
            textAlign={"end"}
          >
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" width={"100%"} justifyContent="space-between">
          <Button variant="solid" colorScheme="green">
            Buy now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
