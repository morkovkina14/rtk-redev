import React from "react"

const ClickPractice=()=>{

    const handleClick=(e)=>{
console.log("e.target:",e.target); /*указывает на то, куда мы физически нажали, в нашем случае может быть стикер кулачка либо подпись "Поставить лайк"- <span></span>, либо сама кнопка button(т.е. весь объект)*/
console.log ("e.currentTarget:",e.currentTarget);/*указывает на конкретное место, куда мы навесили обработчик, в нашем случае это onClick на button */
console.log("e.target.tagName:", e.target.tagName); /*указывает на имя тега, на который мы конкретно кликнули, тут может быть два варианта: если мы кликнем на надпись или стикер, которые находятся в своем теге span- мы получим-SPAN, однако, если кликнем на пустое пространство кнопки, в консоль выведется -BUTTON */
console.log("e.currentTarget.tagName:", e.currentTarget.tagName); /*указывает на html-тег эл, на котором висит обработчик, в нашем случае -BUTTON */
    }


    return(
        <div>
            <button onClick={handleClick}>
  <span>👍</span>
  <span>Поставить лайк</span>
             </button>
        </div>
    )
}

export default ClickPractice