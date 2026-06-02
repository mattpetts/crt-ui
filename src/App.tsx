import Text from "../lib/primitives/text/Text";
import Button from "../lib/primitives/button/Button";
import { ThemeProvider } from "../lib/providers/ThemeProvider";

function App() {

  return (
    <div style={{ backgroundColor: '#19233b' }}>
      <ThemeProvider>
        <Text as="h1" size="2xl">Heading 1</Text>
        <Text as="h2" size="xl">Heading 2</Text>
        <Text as="h3" size="lg">Heading 3</Text>
        <Text as="h4" size="md">Heading 4</Text>
        <Text as="h5" size="sm">Heading 5</Text>
        <Text as="p" size="md">Paragraph</Text>
        <Text as="sup" size="xs">Superscript</Text>
        <div></div>
        <Button variant="primary" glow={ true }>
          <Text as="p" size="xs">Primary Button</Text>
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
        <Button variant="primary" width="full" glow={ true }>
          <Text as="p" size="xs">Full Width Primary Button</Text>
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default App
