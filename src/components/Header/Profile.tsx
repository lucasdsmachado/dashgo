import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
       <Box mr="4" textAlign="right">
          <Text>Brian Machado</Text>
          <Text color="gray.300" fontSize="small">
            brian@gmail.com
          </Text>
       </Box>
       <Avatar size="md" name="Brian Machado" src="https://github.com/lucasdsmachado.png"/>
     </Flex>
  );
}