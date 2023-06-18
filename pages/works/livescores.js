import { Container, Badge, List, ListItem, AspectRatio } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="LiveScores Application">
    <Container>
      <Title>
        Live Scores Football Application <Badge>2023</Badge>
      </Title>
      <P>
        Live Scores Football Application that shows the live scores of all
        matches being played around the world
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile, Laptop and Tablet</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, IMDB API, Tailwindcss</span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/9kUR3TjMJnc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
