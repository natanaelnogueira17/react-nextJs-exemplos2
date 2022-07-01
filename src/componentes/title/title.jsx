/*exemplo de componenete React com propriedade com Props
(Atributos)*/

import css from './Title.module.css'//importa pagina css




function Title(props){
  return (
    <h1 className={css.Title}>
      {props.children}
      </h1>
  )
}

export default Title