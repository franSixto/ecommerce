import { useParams } from "react-router";
import { ItemListContainer } from "../components";

export const Category = () => {
  const { categoryId } = useParams();

  return <ItemListContainer products={[]} />;
};
