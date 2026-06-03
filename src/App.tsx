import { Text, Block, Button, GenericInput } from "../lib/components/primitives";
import { ThemeProvider } from "../lib/providers/ThemeProvider";


function App() {

  return (
    <div style={{ backgroundColor: 'black' }}>
      <ThemeProvider>
        <Text as="h1" size="2xl" color="default">Heading 1</Text>
        <Text as="h2" size="xl" color="default">Heading 2</Text>
        <Text as="h3" size="lg" color="default">Heading 3</Text>
        <Text as="h4" size="md" color="default">Heading 4</Text>
        <Text as="h5" size="sm" color="default">Heading 5</Text>
        <Text as="p" size="md" color="default">Paragraph</Text>
        <Text as="sup" size="xs" color="default">Superscript</Text>
        <div></div>
        <Button variant="primary">
          <Text as="p" size="xs">Primary Button</Text>
        </Button>
        <Button variant="primary" glow={ true }>
          <Text as="p" size="xs">Primary Button Glow</Text>
        </Button>
        <Button variant="secondary" glow={ true }>
          <Text as="p" size="xs">Secondary Button</Text>
        </Button>
        <Button variant="primary" theme="error">
          <Text as="p" size="xs">Primary Button</Text>
        </Button>
        <Button variant="primary" theme="warning" glow={ true }>
          <Text as="p" size="xs">Primary Button</Text>
        </Button>
        <Button variant="primary" width="full" glow={ true } hover="scanline">
          <Text as="p" size="xs">Scanline hover</Text>
        </Button>
        <Button variant="primary" width="full" glow={ true } hover="glitch">
          <Text as="p" size="xs">Glitch hover</Text>
        </Button>
        <Button variant="primary" width="full" glow={ true } hover="fill">
          <Text as="p" size="xs">Fill hover</Text>
        </Button>
        <Block theme="warning">
          <Text as="h1" size="2xl">Heading 1</Text>
          <Text as="h3" size="lg">This is a card</Text>
          <Button variant="primary" theme="warning" width="full" glow={ true } hover="glitch">
            <Text as="p" size="xs">Glitch hover</Text>
          </Button>
        </Block>
        <Block theme="error">
          <Text as="h1" size="2xl">Heading 1</Text>
          <Text as="h3" size="lg">This is a card</Text>
          <Button variant="primary" theme="error" width="full" glow={ true } hover="glitch">
            <Text as="p" size="xs">Glitch hover</Text>
          </Button>
          <GenericInput type="text" name="name" value="hello" />
          <GenericInput type="number" name="age" value="23" />
          <GenericInput type="email" name="age" />
          <GenericInput type="date" name="age" />
          <GenericInput type="password" name="age" />
        </Block>
      </ThemeProvider>
    </div>
  )
}

export default App
