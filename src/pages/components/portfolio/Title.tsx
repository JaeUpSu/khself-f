import { Text, Badge } from "@chakra-ui/react";

interface Props {
  title: string;
  isNew: boolean;
}

export const Title = ({ title, isNew }: Props) => {
  return (
    <Text fontSize="11pt" fontWeight="bold">
      {title}
      {isNew && (
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          New
        </Badge>
      )}
    </Text>
  );
};
