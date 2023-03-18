import { AppShell, Slider, Footer, Group, Header, Text, ActionIcon, Modal, Switch, Tooltip, useMantineTheme, useMantineColorScheme, Flex, TextInput} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars, IconSettings, IconArrowRight, IconArrowLeft, IconBrandOpenai} from '@tabler/icons-react';

export function InputWithButton(TextInputProps) {
    const theme = useMantineTheme();
  
    return (
      <TextInput
        icon={<IconBrandOpenai size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
            {theme.dir === 'ltr' ? (
              <IconArrowRight size="1.1rem" stroke={1.5} />
            ) : (
              <IconArrowLeft size="1.1rem" stroke={1.5} />
            )}
          </ActionIcon>
        }
        placeholder="AI Prompt"
        rightSectionWidth={42}
        {...TextInputProps}
      />
    );
  }

  import { createStyles, SegmentedControl, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
    [`@media (max-width: 500px)`]: {
      display: 'none',
    },
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: 'blue', to: 'violet' }),
  },

  control: {
    border: '0 !important',
  },

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
}));

export function GradientSegmentedControl() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Tooltip label="Select wich OpenAi modal to use. (I don't have access to GPT-4's api, will add it as soon as I get access.)" withArrow position="bottom" color={theme.colorScheme}>
      <SegmentedControl
        radius="xl"
        size="md"
        data={[
          { value: 'gpt-4', label: 'GPT-4', disabled: true },
          { value: 'gpt-3.5-turbo', label: 'GPT-3.5-Turbo' },
          { value: 'gpt-3.5', label: 'GPT-3.5' },
          { value: 'gpt-3', label: 'GPT-3' },
          ]}
        classNames={classes}
      />
    </Tooltip>
  );
}

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      />
    </Group>
  );
}

export const ApplicationContainer = ({children}) => {
    const theme = useMantineTheme();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <AppShell
        styles={{
            main: {
                width: "100vw",
                height: "100vh",
                paddingLeft: "0px",
            }
        }}
        fixed
        footer = {
            <Footer height={60} p="md">
                <InputWithButton style={{margin:'-8px 0px 0px 0px'}} />
            </Footer>
        }
        header= {
            <Header height={60} p="md">
                <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between",height:"100%"}}>
                    <Text size="xl" weight="bolder">Next GPT</Text>
                    <Flex style={{alignItems:'center'}}>
                      <GradientSegmentedControl />
                      <ActionIcon onClick={open} variant="default" ml='sm' size='xl' radius='xl'><IconSettings size="1.2rem" /></ActionIcon>
                    </Flex>
                </div>
            </Header>
        }
        >
            <Modal opened={opened} onClose={close} title="Settings">
                <Flex align="center" justify="space-around">
                  <Text>Theme</Text>
                  <SwitchToggle />
                </Flex>
                {/* <Text mb={10}>Advanced Ai settings</Text>
                <Flex justify="space-around">
                  <Flex direction="column" align='center' mb={20}>
                    <Text>Temperture</Text>
                    <Slider w={100} size='sm' min={0} max={2} step={0.01} defaultValue={0.7} marks={[{value: 0, label: '0'}, {value: 2, label: '2'}]}/>
                  </Flex>
                  <Flex direction="column" align='center' mb={20}>
                    <Text>Maximum lenght</Text>
                    <Slider w={100} size='sm' min={1} max={4000} step={1} defaultValue={1000} marks={[{value: 0, label: '0'}, {value: 1000, label: '1000'}, {value: 4000, label: '1000'}]}/>
                  </Flex>
                </Flex>
                <Flex justify="space-around" mb={20}>
                  <Flex direction="column" align='center' mb={20}>
                    <Text>Frequency penalty</Text>
                    <Slider w={100} size='sm' min={-2} max={2} step={0.01} defaultValue={0} marks={[{value: 0, label: '0'}, {value: 2, label: '2'}]}/>
                  </Flex>
                  <Flex direction="column" align='center' mb={20}>
                    <Text>Presence penalty</Text>
                    <Slider w={100} size='sm' min={-2} max={2} step={0.01} defaultValue={0} marks={[{value: 0, label: '0'}, {value: 2, label: '2'}]}/>
                  </Flex>
                </Flex> */}
                <Flex align="center" direction="column">
                  <Text>Made with Next.js 13 & Mantine 6</Text>
                  <Text>by Andorkó Zsolt</Text>
                </Flex>
            </Modal>
            {children}
        </AppShell>
    )
}