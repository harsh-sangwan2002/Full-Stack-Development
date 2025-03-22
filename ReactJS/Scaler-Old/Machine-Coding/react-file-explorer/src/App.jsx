import FileExplorer from "./components/FileExplorer"
import data from './data.json';

function App() {

  return (
    <>
      <FileExplorer folderData={data} />
    </>
  )
}

export default App
