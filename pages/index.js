import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
  IoDocumentTextOutline
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpg'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)', marginTop: '10px' }}
      >
        Hello, I&apos;m a Javascript FullStack developer based in Abuja!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jeremy Smart
          </Heading>
          <p>Digital Craftsman ( Developer / Graphic Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/smart.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jeremy Smart is a freelance and a full-stack developer based in Abuja
          with a passion for building digital services/stuff he wants. He has a
          knack for all things launching products, from planning and designing
          all the way to solving real-life problems with code. When not working,
          he loves teaching others how to code on his{' '}
          <Link
            as={NextLink}
            href="https://www.youtube.com/@SmartJeremy"
            passHref
            scroll={false}
          >
            Youtube Channel
          </Link>
          . He publishes tech and coding content for his Instagram followers as
          &quot;
          <Link
            as={NextLink}
            href="https://instagram.com/9jacoder.tech"
            passHref
            target="_blank"
          >
            9jacoder.tech
          </Link>
          &quot; has more than 100 subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            scroll={false}
            href="https://docs.google.com/document/d/1v98Kmc0THnFRRb5miaNgAuOKFZIkYM6Z/edit?usp=sharing&ouid=112759593257482879668&rtpof=true&sd=true"
            leftIcon={<IoDocumentTextOutline />}
            rightIcon={<DownloadIcon />}
            colorScheme="teal"
          >
            Download My CV
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Kaduna, Nigeria.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Completed a Course on Web Development at National Institute of
          Information Technology (NIIT)
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed a B.Tech Program in the Federal University of Technology,
          Minna
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Working as a freelancer
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Udemy course on Learn Ethical Hacking From Scratch
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Udemy course on PHP & MySQL course for absolute beginners
          | Become a PHP pro
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Udemy course on Ethereum and Solidity: The Complete
          Developers Guide
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Udemy course on React, NodeJS, Express & MongoDB - The
          MERN Fullstack Guide
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Udemy course on Next.js & React - The Complete Guide
          (incl. Two Paths!)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed a Udemy course on JavaScript - The Complete Guide 2023
          (Beginner + Advanced)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="https://instagram.com/smartoghenemine" target="_blank">
            WeightLifing
          </Link>
          , Music, Technology , Games,{' '}
          <Link href="https://instagram.com/9jacoder.tech" target="_blank">
            Content Creation
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/9jacoderYT" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @9jacoderYT
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/@SmartJeremy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube />}
              >
                @JeremySmart
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com/9jacoder.tech" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @9jacoder.tech
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/@SmartJeremy"
            title="Smart Jeremy Youtube"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200 subs)
          </GridItem>
          {/* <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem> */}
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Follow me on Instagram
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. I also post desk
          content here, so please follow to enjoy
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://instagram.com/9jacoder.tech"
            scroll={false}
            leftIcon={<IoLogoInstagram />}
            colorScheme="teal"
          >
            Follow me on Instagram
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
