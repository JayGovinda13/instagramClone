import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

const PostHeader = ({username, avatar}) => {
  return (
    <Flex justify={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={3}>
        <Avatar src={avatar} size={"sm"} alt="user profile pic" />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"grey.500"}>· 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"poiter"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
