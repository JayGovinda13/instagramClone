import { Avatar, Flex, Link, Text, textDecoration } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="JayGovinda" size={"lg"} src="/perfil.JPG" />
        <Text fontSize={12} fontWeight={"bold"}>
          JayGovinda
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{textDecoration:'none'}}
        cursor={"poiter"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
