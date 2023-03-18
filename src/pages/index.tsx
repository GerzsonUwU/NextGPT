import { ActionIcon, Button, Text, CopyButton, Tooltip, Loader, useMantineTheme, Flex, Center,} from "@mantine/core"
import { IconBrandOpenai, IconUser, IconCopy, IconCheck, IconApiApp } from '@tabler/icons-react';
import Head from "next/head"



export default function Home() {
  const theme = useMantineTheme();

  return (
    <Flex direction='column' p="md">
      <Flex p="md" mb={10} style={{border:`1px solid ${theme.colors.violet[6]}`, borderRadius:'10px', alignItems:'center'}}>
        <Flex style={{width:'50px', alignItems:'center'}}>
          <IconBrandOpenai size='2rem' style={{margin:'0px 10px 0px 0px'}} />
        </Flex>
        <Text>This is a text example written by OpenAi chatbot. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem perferendis dolor enim id, pariatur est modi, odio alias ullam tenetur ducimus fugiat aut neque magni consequatur iste, perspiciatis impedit temporibus!</Text>
        <CopyButton value="Successfully copied" timeout={2000}>
        {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right" color={theme.colorScheme}>
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
      </Flex>
      <Flex p="md" mb={10} style={{border:`1px solid ${theme.colors.blue[6]}` , borderRadius:'10px', alignItems:'center'}}>
        <Flex style={{width:'50px', alignItems:'center'}}>
          <IconUser size='2rem'style={{margin:'0px 10px 0px 0px'}} />
        </Flex>
        <Text>This is a text example written by the user. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem perferendis dolor enim id, pariatur est modi, odio alias ullam tenetur ducimus fugiat aut neque magni consequatur iste, perspiciatis impedit temporibus!</Text>
      </Flex>
      <Flex p="md" mb={10} style={{border:`1px solid ${theme.colors.violet[6]}`, borderRadius:'10px', alignItems:'center'}}>
        <Flex style={{width:'50px', alignItems:'center'}}>
          <Loader color={
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5]
          } size='2rem' />
        </Flex>
        <Text>Generating response...</Text>
      </Flex>

      <Center>
        <Button leftIcon={<IconApiApp size="1rem" />} onClick={apiresponse}>Api test</Button>
      </Center>
    </Flex>
  )
}


export async function apiresponse(){
  //have to write a server side alternative
}