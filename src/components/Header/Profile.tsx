import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
       { showProfileData && (
         <Box mr="4" textAlign="right">
            <Text>Brian Machado</Text>
            <Text color="gray.300" fontSize="small">
              brian@gmail.com
            </Text>
         </Box>
       )}
       <Avatar size="md" name="Brian Machado" src="https://github.com/lucasdsmachado.png"/>
     </Flex>
  );
}