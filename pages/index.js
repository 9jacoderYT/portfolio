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
        css={{ backdropFilter: 'blur(10px)' }}
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
            href="https://doc-0s-78-docs.googleusercontent.com/docs/securesc/b42nbi5d3leq62g3iudtnrufgm6co4gg/udcbb05iekgusoqqbrn56dcd7r1565ka/1687126350000/15880105539992280033/15880105539992280033/1dMpn1R5D9oAObyr1dqr9jjmfw-3jOTkx?e=download&ax=ADWCPKA_DqabB5FU6nphTAD01A-3lU-1Xgul2FxZFjZTO0EHmYsuFdw55GwUbYA9L1Hq8yHV0ZgfEbXjvWbbIFDgSaDcYyiPPl5lkY7tkcesvFxBninlaZTnpFE_ggwtncbUb0upgzJTKYefsGWpMDAjk_cdA6Khc6W6mS3rIACEWAinvJXoTtSJ6X3JX2QNnhETxc417qHxAexiKzv_BAzvq39Mn2S9eBtU3MyNcDbCq7bIu9_lAKFcTwJNygRRPoO_e5Mmf-piG0UqjU7yl2h8c_4cuul-tyNIcviEQtYEgGL9tK2UIxmwiPVFI760azfB_STfkTpLhhsdG54DnV1Sn7Q3sTFjc0Q7J5YRRYNF04rtJVzVazeVOVZx6nF_5nbeUcNOQ_mfzyHqoWcg0GULTddC8de1wZzaZH22gkY_mrIvJ45FgEdLxdl2QmNqz3vZ0I7R_N-K128HsR5UZtbBUudNwi9GpFmp5AIVEyAke1K8hkNcxXZQXVIvqUOccBcg3sq7jnPGlBKenVebSCoF7r-_RrLXJwwL212uG19MXNLs5F-A6Ie94qIkEVSGJGpDmfRuWRxmXb_NGRA8KYMNtCaIra194ZHAvVUOrXc8rz3C_PeCcSd-GeyzaOP5gvV_PMYWWhxy2cbXPkDONaCjPNCHyLoallRdlngYdkbeV6RP0SuIJf7yOcxkYEgeLm1ZEJLzVnC2cCEQeU9_kJUKIevIBmrn9oFjlXLGzrcgo1F1XwS09TTmnTklIK-zc8unPemg2fWm9UoAdROsl_Vb0NA8hAYfkk9-O1sUknTrnt_7GYR5U-GQj-7PoxUgAAXAef-4RLL2vdv90laHrcFsW1xH86d1sMde2zObf6SANbGEDjz1HbDeKNB3Hf0WM1-qbjxGLOqykQVFnX_IhtSWzGQAmd1KYJtN_iy982pxf-j7sU9COfe4OyCZf55ujAs6jx8hReHEjapmIacW7BtscSyR3hK00wSWrNYlRwuov9o&uuid=f12178ea-46df-4c4a-bca3-95e03ea4396b&authuser=0"
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
