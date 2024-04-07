import {
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} alignItems="flex-start" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9ArN9BHrFr1SyEVQdp27iFp6YLODCB7AlQ&s" alt="Piggy birthday cake" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Piggy birthday cake</Heading>
            <Text>
              TBPEBK18
            </Text>
          </VStack>
          <Text as="b">$20.00</Text>
        </Stack>
      </HStack>

      <VStack
        spacing={4}
        alignItems="stretch"
        w="full"
      >
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text as="b">$20.00</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Shipping</Text>
          <Text as="b">$4.00</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Taxes (estimated)</Text>
          <Text as="b">$3.18</Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text>Total</Text>
        <Heading size="lg">$27.18</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
