import getWebGLContext from './javascript/webGLContext.js'
import resizeCanvas from './javascript/resizeCanvas.js'
import { initBlit } from './javascript/blit.js'
import { startGUI } from './javascript/GUI.js'
import { loadShaders } from './javascript/shaders.js'
import { loadPrograms } from './javascript/programs.js'

console.log('main.js called')

const canvas = document.getElementById('glCanvas')

const webGLContext = getWebGLContext(canvas)
const gl = webGLContext.gl
// const ext = webGLContext.ext

initBlit(gl)
resizeCanvas(canvas)

loadShaders(gl, 'shaders', [
  'advection.fs',
  'bloomBlur.fs',
  'bloomPrefilter.fs',
  'blurVertex.vs',
  'clear.fs',
  'copy.fs',
  'display.fs',
  'gradientSubtract.fs',
  'splat.fs',
  'sunraysMask.fs',
  'baseVertex.vs',
  'bloomFinal.fs',
  'blur.fs',
  'checkerboard.fs',
  'color.fs',
  'curl.fs',
  'divergence.fs',
  'pressure.fs',
  'sunrays.fs',
  'vorticity.fs'
], () => {
  loadPrograms(gl)
  startGUI(webGLContext, canvas)
})
