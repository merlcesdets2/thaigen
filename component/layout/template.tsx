import { AppShell, Title } from '@mantine/core';
import { NavbarNested } from './sidebar'

type Props = {
    title: string
    children: JSX.Element,
  };

export const AplicationContainer = ({title, children}: Props) => {
    console.log(title)
    return (
        <AppShell
        padding="md"
        navbar={<NavbarNested/>}
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
        >
        <Title order={1}>{title}</Title>
        {children}
        </AppShell>
    );
}