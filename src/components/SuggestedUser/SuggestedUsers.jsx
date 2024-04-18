import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"grey.500"}>
          Suggested to you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "grey.400" }}
          cursor={"poiter"}
        >
          See all
        </Text>
      </Flex>
      <SuggestedUser
        name="Mario Mariano"
        followers={15313}
        avatar="http://bit.ly/dan-abramov"
      />
      <SuggestedUser         name="Paulo Pedrosa"
        followers={520}
        avatar="http://bit.ly/ryan-florence" />
      <SuggestedUser         name="Frank Fernandes"
        followers={4312}
        avatar="http://bit.ly/code-beast"/>
      <Box fontSize={12} color={"grey.500"} mt={5} alignSelf={"start"}>
        © 2024 Build By{" "}
        <Link
          href="https://julianoamaral.vercel.app"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Juliano Amaral
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
