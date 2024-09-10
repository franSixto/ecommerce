import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuOptions = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "RPG" },
    { id: 4, name: "Strategy" },
    { id: 5, name: "Simulation" },
    { id: 6, name: "Sports" },
    { id: 7, name: "Puzzle" },
    { id: 8, name: "Horror" },
  ]
  return (
    <Box bg={useColorModeValue("gray.10", "gray.900")} px={4}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Flex direction={"row"} align={"center"}>
          <Image
            src="/assets/logo.png"
            alt="Logo Store"
            boxSize="60px"
            bg="radial-gradient(#1bfc9d00, transparent, #1bfe9e38, transparent, transparent, transparent)"
            borderRadius={"10px"}
          ></Image>
          <Box fontSize="2xl">Game Store</Box>
          <Menu display="flex" gap={4}>
              <Link to="/" style={{marginLeft: "20px"}}>Home</Link>
              <MenuButton as={Link} cursor="pointer" style={{marginLeft: "20px"}}>
                Dinamyc Menu
              </MenuButton>
              <MenuList>
                {menuOptions.map((option) => (
                  <MenuItem key={option.id}>{option.name}</MenuItem>
                ))}
              </MenuList>
          </Menu>
        </Flex>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <CartWidget />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                  }
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={
                      "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                    }
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
