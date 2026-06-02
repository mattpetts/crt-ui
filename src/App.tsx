import Text from "../lib/primitives/text/Text";
import { ThemeProvider } from "../lib/providers/ThemeProvider";

function App() {

  return (
    <ThemeProvider>
      <Text>This is default</Text>
      <Text variant="error">This is error</Text>
      <Text glow={ true }>This is default with a glow</Text>
      <Text variant="warning" glow={ true }>This is error with a glow</Text>
    </ThemeProvider>
  )
}

export default App
