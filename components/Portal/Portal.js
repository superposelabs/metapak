import React, { useRef, useLayoutEffect } from 'react'

const Canvas = props => {

  const canvasRef = useRef(null)

  let arr = props.Dots;
  const draw = (ctx, frameCount) => {

    for (var i = 0; i < arr.length; i++) {
      ctx.fillStyle = arr[i].color;
      ctx.beginPath()
      ctx.arc(arr[i].x, arr[i].y, arr[i].size*Math.sin(frameCount*arr[i].speed)**2, 0, 2*Math.PI)
      ctx.fill()
    }

  }
  
  useLayoutEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      
      draw(context, frameCount)

      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} width="189" height="285" style={{backgroundColor: props.Color}} className={props.Styles} />
}

export default Canvas