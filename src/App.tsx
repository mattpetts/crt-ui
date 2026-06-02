import Text from "../lib/primitives/text/Text";
import { ThemeProvider } from "../lib/providers/ThemeProvider";

function App() {

  return (
    <ThemeProvider>
      <Text as="h1" size="2xl">Heading 1</Text>
      <Text as="h2" size="xl">Heading 2</Text>
      <Text as="h3" size="lg">Heading 3</Text>
      <Text as="h4" size="md">Heading 4</Text>
      <Text as="h5" size="sm">Heading 5</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="sup" size="xs">Superscript</Text>
      <Text glow={ true } size="md">Glow</Text>
      <Text variant="warning" size="md" glow={ true }>Warning</Text>
      <Text variant="error" size="md" glow={ true }>Error</Text>
    </ThemeProvider>
  )
}

export default App
