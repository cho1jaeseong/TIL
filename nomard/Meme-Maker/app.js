const colorOptions = Array.from(document.getElementsByClassName("color-option"))
const canvas = document.querySelector("canvas")
const lineWidth = document.querySelector("#line-width")
const ctx = canvas.getContext("2d")
const modeBtn = document.getElementById("mode-btn")
const eraserBtn = document.getElementById("eraser-btn")
const textInput = document.getElementById("text")
const saveBtn = document.getElementById("save")
const FontChangBtn = document.getElementById("Font-Change")
const FontOption= document.querySelectorAll("#Font-Options button")
const FontOptions= document.getElementById("Font-Options")
ctx.lineCap = "round"
canvas.width=800
canvas.height=800
const ChangOption = document.getElementById("FillOrStroke")
const fileInput = document.getElementById("file")
const destroyBtn = document.getElementById("destroy-btn")
const color = document.querySelector("#color")
ctx.lineWidth = 5;
let isPainting = false
let isFilling = false
ctx.font = "68px Rubik Doodle Shadow"
function onMove(event){
    if (isPainting){
        ctx.lineTo(event.offsetX,event.offsetY)
        ctx.stroke()
        return
    }
    ctx.beginPath()
    ctx.moveTo(event.offsetX,event.offsetY)
}
function onMouseDown(){
    isPainting = true;

}
function onMouseUp(){
    isPainting = false;

}
function onWidthChange(event){
    ctx.lineWidth = event.target.value
}
function onColorChange(event){
    ctx.strokeStyle = event.target.value
    ctx.fillStyle = event.target.value
}
function onColorClick(event){
    color.value = event.target.dataset.color
    ctx.strokeStyle = event.target.dataset.color
    ctx.fillStyle = event.target.dataset.color
}
colorOptions.forEach(color => color.addEventListener("click",onColorClick))
function onModeClick(event){
    if(isFilling){
        isFilling=false
        modeBtn.innerText ="Fill"
    }
    else{
        isFilling=true
        modeBtn.innerText="Draw"
    }
}
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,800,800)

    }
}
function onDestroyClick(){
    ctx.fillStyle="white"
    
    ctx.fillRect(0,0,800,800)
}
function onEraseClick(){
    ctx.strokeStyle = "white"
    isFilling = false
    modeBtn.innerText ="Fill"
}

function onFileChange(event){
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url
    image.onload = function(){
        ctx.drawImage(image, 0,0,800,800)
        fileInput.value = null
    }
}
function onDoubleClick(event){
    if (text!==""){
        ctx.save()
    const text = textInput.value
    ctx.lineWidth = 1
    // console.log(ctx.font)
    if(ChangOption.innerText ==='Stroke'){ctx.fillText(text,event.offsetX,event.offsetY)}
    else{ctx.strokeText(text,event.offsetX,event.offsetY)}
    ctx.restore()
    }
}
function onSaveClick(event){
    const url = canvas.toDataURL()
    const a = document.createElement("a")
    a.href = url
    a.download ="myDrawing.png"
    a.click()
}
function onFontChangBtn(event){
    // console.log(FontOptions)
    // console.log(FontOption)
    FontOptions.style.display = "flex"
    FontChangBtn.style.display = "none"
    
}
function ChangeFont(a){
    ctx.font = "68px "+a
    FontOptions.style.display = "none"
    FontChangBtn.style.display = ""
}


FontOption.forEach(function(button) {
    button.addEventListener("click", function(){
        ChangeFont(this.textContent)

    })
})
function onChangeOption(event){
    if (this.innerText === 'Stroke'){
        this.innerText = 'Fill'
    }
    else{
        this.innerText = 'Stroke'
    }

}

ChangOption.addEventListener("click", onChangeOption)
FontChangBtn.addEventListener("click" , onFontChangBtn)
saveBtn.addEventListener("click",onSaveClick)
canvas.addEventListener("dblclick" , onDoubleClick)
fileInput.addEventListener("change", onFileChange)
eraserBtn.addEventListener("click",onEraseClick)
destroyBtn.addEventListener("click",onDestroyClick)
modeBtn.addEventListener("click",onModeClick)
canvas.addEventListener("click",onCanvasClick)
lineWidth.addEventListener("change" ,onWidthChange )
color.addEventListener("change", onColorChange)

canvas.addEventListener("mousemove",onMove)
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mouseup", onMouseUp)
canvas.addEventListener("mouseleave", onMouseUp)