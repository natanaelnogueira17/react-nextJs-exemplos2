
/*exemplo de componenete React com propriedade com children
(filhos)*/



function Subtitle(props){
  return (
    <h4>{props.text}</h4>
  )
}


Subtitle.defaultProps = {
  text: 'Qualquer coisa'
}  // usado para manter o padrao caso nao chame la na index o text
export default Subtitle

