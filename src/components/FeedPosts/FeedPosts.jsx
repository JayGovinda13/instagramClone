import {
  Box,
  Container,
  Skeleton,
  SkeletonCircle,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}> content warpped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!false && (
        <>
          <FeedPost
            img="/perfil.JPG"
            username="JayGovinda"
            avatar="/perfil.JPG"
          />
          <FeedPost
            img="/profilepic.png"
            username="asaprogrammer"
            avatar="/profilepic.png"
          ></FeedPost>
          <FeedPost img="/img1.png" username="Serginho" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="DougXambre" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="Soto" avatar="img3.png" />
          <FeedPost img="img4.png" username="AlexKaxalote" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
