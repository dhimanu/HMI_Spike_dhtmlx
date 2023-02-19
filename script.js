const diagram = new dhx.Diagram("diagram",{
	toolbar: [{
        id: "download",
        content: "<i className='dxi dxi-download'></i>",
        tooltip: "Download",
    }],
});
console.log("Hi this is the diagram")
// сreates a custom shape; sets sidebar options for its editing in the right panel of the editor
const path = "./plantSvgs/";


const template = ({ img, name, id, notificationFlag,notificationColor,warningText, warningNumber,warningId}) => {
  if(notificationFlag) {
	console.log('this is inside the flag');
		let myStyle = `
		background-color: ${notificationColor};
		height: 25px;
		width: 25px;
		color: white;
		font-family: Ariel;
		font-weight: bold;
		position: absolute;
		text-align: center;
		border-radius: 50%;
		left: 30px;
		display: inline-block;
		`
				return (`<div>
		    <img class="${id}" src="${img}" alt="${name}"></img>
		    <div style = "${myStyle}" flag="${notificationFlag}" text = "${warningText}" class="${warningId}"> ${warningNumber} </div>
			</div>`)
	}
	console.log("this is outside the flag");
	return (`<img class="${id}" src="${img}" alt="${name}"></img>`);	
}
  
let alertFunction = (id) => alert(`this is alert ${id}`);
// alertFunction(12);


diagram.addShape("plantSvg", {
	template: template,
});


let zoomArr = [0.5,0.75,0.85,0.9,1,1.2,1.5];
let element = document.querySelector('.main_container_plant');
let value = 0.5;


let indexofArr = 2;

document.querySelector('.zoomin').addEventListener('click',()=>{
  console.log('value of index zoomin is',indexofArr)
  if(indexofArr < zoomArr.length-1){
    indexofArr += 1;
    value = zoomArr[indexofArr];
    document.querySelector('#sel').value = value
    // console.log('current value is',value)
    // console.log('scale value is',value)
    element.style['transform'] = `scale(${value})`
  }
});

document.querySelector('.zoomout').addEventListener('click',()=>{
 console.log('value of index  zoom out is',indexofArr)
  if(indexofArr >0){
     indexofArr -= 1;
     value = zoomArr[indexofArr];
     document.querySelector('#sel').value = value
  // console.log('scale value is',value)
  element.style['transform'] = `scale(${value})`
  }
})

var FaultAssetNotificationFilter = id => plant_Diagram_data.find(val => val.id === id);


console.log("the value is", FaultAssetNotificationFilter("danger2_01"))
let targetComponent = (e, type) => {
	//let className = e.target.className;
	if (type === "onmouseover") {
		let targetElement = e.target._node.attrs.flag;
		if(targetElement) {
			e.target.title = e.target._node.attrs.text;

		}
	}
	else if (type === "onclick") {
		console.log("the e is", e.target._node.attrs	);
		let targetElement = e.target._node.attrs.flag;
		if(targetElement) {
			alert(`This is the alert for ${e.target._node.attrs.text} aircooled condenser`)
		}
	}
}

document.onmouseover = function (e, type) {
	let x = e.pageX;
	let y = e.pageY;
	e.target.title = "X is "+x+" and Y is "+y;
	targetComponent(e, "onmouseover");
};

document.onclick = function (e) {
	targetComponent(e, "onclick");
}
diagram.data.parse(plant_Diagram_data);
const id = diagram.selection.getId(); // -> "2"

function sum(a,b) {
	return a + b;
}

module.exports = sum;