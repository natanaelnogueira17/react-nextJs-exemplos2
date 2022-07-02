import Head from 'nest/head'

import '../src/style.css'


function App({Component, pageProps}){
  return (
   <> 
     <Head>
        <title> Título padrão     
        </title>
      </Head>
      <Component{...pageProps}/>
    </> 
  )
}


export default App