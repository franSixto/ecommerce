import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
import { Flex } from "@chakra-ui/react";

export const Category = () => {
  const { categoryId } = useParams();

  const { products } = useProductsByCategory(categoryId);

  return <Flex gap={4} flexWrap={"wrap"} justifyContent={"center"} padding={4}><ItemListContainer products={products} /></Flex>;
};
