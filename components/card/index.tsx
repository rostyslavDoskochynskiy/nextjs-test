import Image from "next/image";
import { Container, ImageBackground, ImageWrapper, Title, Email } from "./card.styled";
import { User } from "../../types/UserList";

interface CardProps {
  data: User;
  priority: boolean;
  index: number;
}

const Card = ({ data, priority, index }: CardProps): JSX.Element => {
  const name = `${data.name.first} ${data.name.last}`;

  return (
    <Container index={index}>
      <ImageBackground index={index}>
        <ImageWrapper>
          <Image src={data.picture.large} alt={name} layout="fill" objectFit="cover" priority={priority} />
        </ImageWrapper>
      </ImageBackground>
      <Title>{name}</Title>
      <Email>{data.email}</Email>
    </Container>
  );
};

export default Card;
